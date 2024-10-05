import { Schema } from "mongoose";

export const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'UserPost',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const PostComment = mongoose.model('PostComment', CommentSchema);

export default PostComment;