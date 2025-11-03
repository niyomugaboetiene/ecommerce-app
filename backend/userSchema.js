import mongoose from "mongoose";


const UserSchema = new mongoose.schema({
    user_id: {type: Number, unique: true, required: true },
    user_name: { type: String, required: true },
    password: { type: Number, required: true },
    image: { type: String },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
});

export default mongoose.model('Product', UserSchema);