import ProductSchema from "./productSchema.js";
import express from "express"
const route = express.Router();

route.post('/add', async(req, res) => {
    try {
        const product = await ProductSchema.create(req.body);
        res.status(201).json({
            message: 'Product Added successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: 'Server Error',
            error: err.message
        });
    }
});

export default route;