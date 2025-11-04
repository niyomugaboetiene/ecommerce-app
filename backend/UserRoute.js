import express from "express";
import multer from "multer";
import UserSchema from "./userSchema.js";
const routes = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'User_Image/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // * to avoid duplicates
    }
})  

const uploads = multer({ storage });

routes.post('/register', uploads.single('image'), async(req, res) => {
    try {
    const { user_name, password } = req.body;
    const ImagePath = req.file ? req.file.path : null;
    
    if (!user_name || !password || !ImagePath) {
        res.status(400).json({ message: 'Missing dependecies' });
    }
        await UserSchema.create({
            user_name, password, image: ImagePath
        });
        
        return res.status(201).json({ message: 'User registered successfully' });
    } catch(error) {
         res.status(500).json({message: 'Database error'});
    }      
})

export default routes;