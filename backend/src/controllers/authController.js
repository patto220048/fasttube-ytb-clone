const mongoose = require('mongoose')
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const createError = require('../error')
const jwt = require('jsonwebtoken')

class authController {
    //create a user [POST]api/auth/signup
    async signup (req, res ,next){

        try{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({...req.body, password:hash})
            await newUser.save();
            res.status(200).send('User saved successfully')

        }
        catch(err){
            next(err);
        }

    }   

    //sign in  [POST]api/auth/signin
    async signin (req, res ,next){
        
        try{
            const user = await User.findOne( {name: req.body.name}  )
            if(!user) return next(createError(404, 'User not found'))

            const isCorrect = await bcrypt.compare(req.body.password, user.password)

            if(!isCorrect){ 
                return next(createError(400, 'Wrong Credentials'))}
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
        catch(err){
            next(err);
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
