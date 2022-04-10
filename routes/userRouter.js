import express from "express";
import { getAllProducts } from "../Controllers/productController.js";
import { Login, SignUp } from "../Controllers/userController.js"; 

const router=express.Router();  

// localhost:5000/posts

router.get('/',getAllProducts);
router.post('/',SignUp);
router.post('/logIn',Login);
// router.patch('/:id',editProduct);
// router.delete('/:id',deleteProduct);



export default router;      
 
