import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"
const AutoIncrement = AutoIncrementFactory();

const UserSchema = new mongoose.schema({
    user_id: { type: Number, unique: true },
    user_name: { type: String, required: true },
    password: { type: Number, required: true },
    image: { type: String },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
});

ProductSchema.plugin(AutoIncrement, { inc_field: 'user_id' });
export default mongoose.model('User', UserSchema);