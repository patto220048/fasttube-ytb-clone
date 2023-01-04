const mongoose = require('mongoose')
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const createError = require('../error')
const jwt = require('jsonwebtoken')



const handleError =(err)=>{
    

    let errors = {name: "", email: "", password: ""}
    //duplicate
    if (err.code === 11000){
        errors.email = "That email or username is already registered"
        errors.name = "That email or username is already registered"
        return errors
    }
    //incorrect email
    if (err.message == 'Incorrect name'){
        errors.name = "That email is incorrect"
    }
    //incorrect password
    if (err.message == 'Incorrect password'){
        errors.password = "That password is incorrect"
    }



    //vilid error
    if (err.message.includes('Users validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
        return errors
        
    }
    return errors
    

}


class authController {

    //handleError
    

    //create a user [POST]api/auth/signup
    async signup (req, res ,next){

        try{
            
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({...req.body, password:hash})
            

            const token = jwt.sign(
                {id:newUser._id}
                ,process.env.JWT_PW,
                { expiresIn: '1d' })
            const {password, ...other} = newUser._doc
            const cookie = res.cookie('access_token', token,{
                httpOnly: true,
                path: '/',
            })  
            await newUser.save();
            
            res.status(200).send('User saved successfully')


        }
        catch(err) {
            const errors = handleError(err)
            res.status(400).json({errors})

        }

    }   

    //sign in  [POST]api/auth/signin
    async signin (req, res ,next){
        
        try{
            const user = await User.findOne( {name: req.body.name}  )
            if(!user){ 
                throw Error('Incorrect name')
            }

            const isCorrect = await bcrypt.compare(req.body.password, user.password)

            if(!isCorrect){ 
                throw Error('Incorrect password')
            }
            else{
                const token = jwt.sign(
                    {id:user._id}
                    ,process.env.JWT_PW,
                    { expiresIn: '1d' })
                
                const {password, ...other} = user._doc
                const cookie = res.cookie('access_token', token,{
                    httpOnly: true,
                    path: '/',


    
                })
             
                res.status(200).json(other)
            }

           
            
        }
        catch(err) {

            const errors = handleError(err)
            res.status(400).json({ errors })
        } 
      

    }

    async signout (req, res ,next){
        res.clearCookie('access_token')
        res.status(200).json('Clear cookies successfully!!')
    }
    
    //gg authentication
    async google(req, res, next){

        try {

            const user = await  User.findOne({email: req.body.email})

            if(user){
                const token = jwt.sign(
                    {id:user._id}
                    ,process.env.JWT_PW,
                    { expiresIn: '1d' })
                
                const cookie = res.cookie('access_token', token,{
                    httpOnly: true,
                    path: '/',

                })
                res.status(200).json(user._doc)

            }
            else{
                const newUser = new User({...req.body, fromGoogle:true})
                const savedUser = await newUser.save()
                const token = jwt.sign(
                    {id:savedUser._id}
                    ,process.env.JWT_PW,
                    { expiresIn: '1d' })
                
                const cookie = res.cookie('access_token', token,{
                    httpOnly: true,
                    path: '/',

                })
                res.status(200).json(savedUser._doc)

            }

            
        } catch (err) {
            next(err);
            
        }

    }
}

module.exports = new authController;
