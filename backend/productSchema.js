import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"

const AutoIncrement = AutoIncrementFactory(mongoose);

const ProductSchema = new mongoose.Schema({
    product_id: { type: Number, unique: true },
    product_name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now() },
    image: { type: String },
    stock: { type: Number, default: 0 },
    timesAddedToCart: { type: Number, default: 0 },
});

ProductSchema.plugin(AutoIncrement, { inc_field: 'product_id' });
export default mongoose.model('Product', ProductSchema);