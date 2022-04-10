import mongoose from "mongoose";


const UserSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:{
        type: String,
        unique: true,
    },
    MobileNumber:{
        type: Number,
        unique: true,
    },
    Address:String,
    Password:String,





    createdAt:{
        type:Date,
        default:new Date(),   
    },
    
    
   
});


const userModel=mongoose.model('Users',UserSchema);

export default userModel;


