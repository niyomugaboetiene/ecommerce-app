import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"
const AutoIncrement = AutoIncrementFactory(mongoose);

const UserSchema = new mongoose.Schema({
    user_id: { type: Number, unique: true },
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    cart: [
        {
            product_id: { type: Number, required: true},
            quality: { type: Number, default: 1},
        }
    ],
    createdAt: { type: Date, default: Date.now()}
});

UserSchema.plugin(AutoIncrement, { inc_field: 'user_id' });
export default mongoose.model('User', UserSchema);