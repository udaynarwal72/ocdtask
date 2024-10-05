import { Schema } from "mongoose";

export const UserSchema = new Schema({
    username: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, enum: ['user', 'admin', 'superAdmin'], default: 'user'
    },
    follower: {
        type: [{ type: Schema.Types.ObjectId }],
        ref: 'User',
        required: false
    },
    following: {
        type: [{ type: Schema.Types.ObjectId }],
        ref: 'User',
        required: false
    },
    created_at: {
        type: Date, default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;