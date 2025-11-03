import mongoose from "mongoose"


const schema = new mongoose.schema({
    product_id: {type: Number, unique: true, required: true },
    product_name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Float16Array, required: true },
    likes: { type: Number },
    date: { type: Date, default: Date.now() },
    image: { type: String },
    stock: { type: Number, default: 0 }

})