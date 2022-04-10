import mongoose from "mongoose";
import userModel from "../Models/userModel.js"; 

 


export const SignUp=async(req,res)=>{
    
    

    const user=req.body;


    const newUser=new userModel(user);

    try{
        await newUser.save();

        res.status(201).json(newUser);
        
    }catch(err){  
        res.status(409).json({message:err.message});  

    }
};    

 

export const Login = async (req, res) => {

  
                const { email, password } = req.body;  
                
                // 1) Check if email and password exist
                if (!email || !password) {
                    
                  return res.status(400).json({message:'Please provide email and password!'});  
                  
                } 
                
                
                // 2) Check if user exists && password is correct
                const user=await userModel.findOne({ Email: email });      
                
                if(!user?.Email===email || !(user?.Password===password)){
                  return res.status(400).json({message:'Incorrect email or password !'});  
                }

                

              
                // 3) If everything ok, send  to client

                const sendObject={ // set what data send it 
                      FirstName:user.FirstName,
                      Email:user.Email,
                      UserId:user._id,  
                };

                res.status(200).json(sendObject);

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