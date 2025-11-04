import exress from "express";
import UserSchema from "./userSchema.js";
const routes = exress.Router();


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
    const { user_name, password } = req.body;
    const ImagePath = eq.file ? req.file.path : null;

    try {
        await UserSchema.create({
            user_name, password, image: ImagePath
        });
    } catch(error) {
        
    }
        
})