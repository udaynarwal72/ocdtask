import { Mongoose, Schema } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        default: "",
    },
    postVideo: {
        type: String,
        default: "",
    },
    tagUser: {
        type: [{ type: Schema.Types.ObjectId }],
        required: false
    },
    tags: {
        type: [{ type: String }],
        default: []
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{timestamps:true});

const UserPost = Mongoose.Model('UserPost', PostSchema);

export default UserPost;