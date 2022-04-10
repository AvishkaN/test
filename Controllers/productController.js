import mongoose from "mongoose";
import productModel from "../Models/productModel.js"; 

export const getAllProducts=async(req,res)=>{

    try{
        const allProducts=await productModel.find();
        // const allProducts=await productModel.deleteMany();

        res.status(200).json(allProducts);
        
    }catch(err){  
        res.status(404).json({message:err.message});  

    }


};  


export const createProduct=async(req,res)=>{  

    const product=req.body;

    const newProduct=new productModel(product);

    try{
        await newProduct.save();

        res.status(201).json(newProduct);
        
    }catch(err){  
        res.status(409).json({message:err.message});  

    }
};  


export const editProduct = async (req, res) => {


    const { id } = req.params;    

    // const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with id: ${id}`);
    
    const updatedProduct = req.body;

    

    await productModel.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);  
     
};



export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await productModel.findByIdAndRemove(id); 

    res.json(id); 

    // res.json({ message: "product deleted successfully." });
};