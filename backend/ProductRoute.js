import ProductSchema from "./productSchema.js";
import express from "express"
import multer from "multer";
const route = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Product_Image/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // * to avoid duplicates
    }
})  

const uploads = multer({ storage });

route.post('/add', uploads.single('image'), async(req, res) => {
    const { product_name, category, price, stock } = req.body;
    const imagPath = req.file ? req.file.path : null;
    try {
        await ProductSchema.create({
            product_name, category, price, stock, image: imagPath
        });
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

route.post('/getProduct', async(req, res) => {
      const products = await ProductSchema.find();
      if (products.length > 0) {
        res.status(200).json({ message: 'Product in the Database', products });
      } else {
        res.status(500).json({message: 'error in adding product'})
      }
})
export default route;