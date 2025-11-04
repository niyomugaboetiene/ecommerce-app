import express from "express";
import multer from "multer";
import UserSchema from "./userSchema.js";
import bcrypt from "bcrypt";
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
    const isExist = UserSchema.findOne({ user_name });
    if (isExist) {
        return res.status(401).json({ message: 'username already taken' });
    }
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const ImagePath = req.file ? req.file.path : null;
    
    if (!user_name || !password || !ImagePath) {
        res.status(400).json({ message: 'Missing dependecies' });
    }
        await UserSchema.create({
            user_name, password: hashedPassword, image: ImagePath
        });
        
        return res.status(201).json({ message: 'User registered successfully' });
    } catch(error) {
         res.status(500).json({message: 'Database error'});
    }      
})

routes.post('/login', async(req, res ) => {
    const { user_name, password } = req.body;

    try {
        const user = await UserSchema.findOne({ user_name });
        const isMatch = await  bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json("Login failed");
        
        req.session.user = {
            user_id: user.user_id,
            user_name: user.user_name,
            isAdmin: user.isAdmin,
            image: user.image
        };
       res.status(200).json({ message: "Login successfully", user: req.session.user });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

routes.get('/userInfo', async(req, res) => {
    if (req.session.user) {
        return res.status(200).json({ userInfo: req.session.user })
    }
    return
});

export default routes;