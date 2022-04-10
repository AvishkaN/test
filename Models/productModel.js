import mongoose from "mongoose";


const ProductSchema=mongoose.Schema({
    productName:String,
    description:String,
    quantity:String,
    userId:String,


    createdAt:{
        type:Date,
        default:new Date(), 
    },
    
    
   
});


const productModel=mongoose.model('Products',ProductSchema);

export default productModel;


