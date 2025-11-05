import ProductSchema from "./productSchema.js";
import express from "express"
import multer from "multer";
const route = express.Router();


const AdminCheck = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!req.session.user.isAdmin) {
          return res.status(403).json({ message: "Forbidden. Admins only." });
    }

    next();
};
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

route.get('/women', async(req, res) => {
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

route.get('/men', async(req, res) => {
    try {
         const MenProduct =  await ProductSchema.find({ category: `Men's Fashion`});
         if (MenProduct.length === 0) {
            return res.status(404).json({ message: 'No men  products found.' });
         }
         return res.status(200).json({message: 'men products', MenProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

})
route.get('/electronics', async(req, res) => {
    try {
         const ElectronicsProduct =  await ProductSchema.find({ category: `Electronics`});
         if (ElectronicsProduct.length === 0) {
            return res.status(404).json({ message: 'No Electronics products found.' });
         }
         return res.status(200).json({message: 'electronics products', ElectronicsProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

})

route.get('/lifestyle', async(req, res) => {
    try {
         const ElectronicsProduct =  await ProductSchema.find({ category: `Home & Lifestyle`});
         if (ElectronicsProduct.length === 0) {
            return res.status(404).json({ message: 'No Lifestyle products found.' });
         }
         return res.status(200).json({message: 'Lifestyle products', ElectronicsProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

})

route.get('/toy', async(req, res) => {
    try {
         const ToysProduct =  await ProductSchema.find({ category: `Baby's & Toys`});
         if (ToysProduct.length === 0) {
            return res.status(404).json({ message: 'No Toys products found.' });
         }
         return res.status(200).json({message: 'Toys products', ToysProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

})
route.get('/health', async(req, res) => {
    try {
         const ToysProduct =  await ProductSchema.find({ category: `Heath & Beauty`});
         if (ToysProduct.length === 0) {
            return res.status(404).json({ message: 'No Toys products found.' });
         }
         return res.status(200).json({message: 'Toys products', ToysProduct});
    } catch (error) {        
        res.status(500).json({message: 'Database error'})
    }

});

route.put('/update/:product_id', AdminCheck, uploads.single("image"), async(req, res) => {
    try {
        const { product_id } = req.params;
        const { product_name, category, price, stock } = req.body;

        const newData = {};

        if (product_name) newData.product_name = product_name;
        if (category) newData.category = category;
        if (price) newData.price = price;
        if (stock) newData.stock = stock;
        if (req.file) newData.image = req.file.path; 
        

        const product  = await ProductSchema.findOneAndUpdate(
            { product_id: Number(product_id) },
            { $set: newData },
            { new: true }
        );  

        if (!product) return res.status(404).json({ message: "Product not found" });

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Database error", error: error.message });
    }
});

route.delete('/delete/:product_id', AdminCheck, async(req, res) => {
    try {
        const { product_id } = req.params;

        const product  = await ProductSchema.findOneAndDelete(
            { product_id: Number(product_id) },
        );  

        if (!product) return res.status(404).json({ message: "Product not found" });

        res.status(200).json({ message: "Product deleted successfully", product });
    } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Database error", error: error.message });
    }
});


export default route;