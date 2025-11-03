import mongoose from "mongoose"


const ProductSchema = new mongoose.schema({
    product_id: {type: Number, unique: true, required: true },
    product_name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    likes: { type: Number },
    date: { type: Date, default: Date.now() },
    image: { type: String },
    stock: { type: Number, default: 0 }

});

export default mongoose.model('Product', ProductSchema);