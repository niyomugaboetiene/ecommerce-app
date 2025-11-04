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

route.get('/getProduct', async(req, res) => {
    try {
      const products = await ProductSchema.find();
      if (products.length > 0) {
        res.status(200).json({ message: 'Product in the Database', products });
      } else {
        res.status(404).json({message: 'error in fetching product'})
      }
    } catch (error) {
        res.status(500).json({message: 'Database error'})
    }
});

route.get('/best-sold', async(req, res) => {
    try {
      const products = await ProductSchema.find({ timesAddedToCart: { $gt: 0 }}).sort({ timesAddedToCart: -1 }).limit(8);
      if (products.length === 0) {
          return res.status(404).json({ message: 'No best sold products found.' });
      }
        res.status(200).json({ message: 'new Products in the Database', products });
      
    } catch (error) {
        res.status(500).json({message: 'Database error'})
    }
});

route.get('/newProducts', async(req, res) => {
    try {
      const products = await ProductSchema.find().sort({ date: -1 }).limit(12);
        res.status(200).json({ message: 'best sold Products in the Database', products });
      
    } catch (error) {
        res.status(500).json({message: 'Database error'})
    }
});

route.get('/womem', async(req, res) => {
    try {
         const womemProduct =  await ProductSchema.find({ category: `Women's Fashion`});
         if (womemProduct.length === 0) {
            return res.status(404).json({ message: 'No womem  products found.' });
         }
         return res.status(200).json({message: 'women products', womemProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

})
export default route;