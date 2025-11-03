import express from "express"
import mongoose from "mongoose";
import ProductRoute from "./ProductRoute.js"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true
}));

app.use('/product', ProductRoute);

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-app')
.then(() => {
    console.log('Connected successfully');
}).catch((error) => {
    console.error(`Error: ${error}`);
});

app.listen(5000, () => console.log('http://localhost:5000'))