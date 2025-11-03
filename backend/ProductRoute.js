import productSchema from "./productSchema";
import express from "express"
const route = express.Router();

route.post('/add', async(req, res) => {
    try {
        const product = await productSchema.create(req.body);
        req.statusCode(201).json({
            message: 'Product Added successfully'
        })
    }
})