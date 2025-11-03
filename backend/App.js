import express from "express"
import mongoose from "mongoose";
import ProductRoute from "./ProductRoute.js"

const app = express();
app.use(express.json());

app.use('/product', ProductRoute);

mongoose.connect('localhost:27017/ecommerce-app.ecommerce')
.then(() => {
    console.log('Connected successfully');
}).catch((error) => {
    console.error(`Error: ${error}`);
})