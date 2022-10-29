import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        context: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
            default: "lvnguyen",
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export const PostModule = mongoose.model("Post", schema);
