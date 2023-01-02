const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
async function connect () {

    try{
        await mongoose.connect(process.env.MONGODBURL);
        console.log("sever connet success");
    } catch (error){
        console.log("fail");


    }

};

module.exports =  {connect} ; 
   