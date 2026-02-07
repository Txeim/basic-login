const mongoose=require("mongoose")
const connect=mongoose.connect("mongodb://localhost:27017/login")

connect.then(()=>{
    console.log("Connect")
})
.catch(()=>{
    console.log("not connected")
})

const loginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }  
});

const signupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    } 
});

const collectionLogin=mongoose.model("userLogin",loginSchema)
const collectionSignup=mongoose.model("userSignup",signupSchema)

module.exports={
    collectionLogin,
    collectionSignup
};