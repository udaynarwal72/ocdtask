import { Schema } from "mongoose";

export const FollowSchema = new Schema({
    follower: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    following: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Follow = mongoose.model('Follow', FollowSchema);

export default Follow;