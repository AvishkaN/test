import express from "express";
import { createProduct,deleteProduct,editProduct,getAllProducts } from "../Controllers/productController.js"; 

const router=express.Router(); 

// localhost:5000/posts

router.get('/',getAllProducts);
router.post('/',createProduct);
router.patch('/:id',editProduct);
router.delete('/:id',deleteProduct);



export default router;      

