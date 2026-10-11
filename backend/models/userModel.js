import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    fullName:{ type:String, required:true},
    username:{type:String, required:true},
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{type:String, required:true},
    password:{type:String, required:true},
    birthDate:{type:Date, required:true}
},
    {
        timestamps:true
})



const User=mongoose.model("User",userSchema) || mongoose.models.User;
export default User;