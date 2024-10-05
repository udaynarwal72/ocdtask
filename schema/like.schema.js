import { Mongoose, Schema } from "mongoose";

const LikeSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'UserPost',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const PostLike = Mongoose.Model('PostLike', LikeSchema);

export default PostLike;