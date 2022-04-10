import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import productRouter from "./routes/productRouter.js";             
import userRouter from "./routes/userRouter.js";             


const app=express();             
dotenv.config();    // enviramental variable           



  

// avoid erros and warnings
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));   
app.use(cors());     


app.use('/products',productRouter);      
app.use('/user',userRouter);     


app.get('/',(req,res)=>{
  res.send('This CRUD APP API');
});         


// const CONNECTION_URL = 'mongodb+srv://Crud_App_DB:scO70ZvHjQm0jVU8@cluster0.rdppn.mongodb.net/DB2?retryWrites=true&w=majority';
// const PORT = process.env.PORT|| 5000;              

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`SERVER RUNING on Port: http://localhost:${process.env.PORT}`)))  
  .catch((error) => console.log(`${error} DID  NOT connect`));        


// mongoose.set('useFindAndModify', false);  



