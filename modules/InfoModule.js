import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        dob: {
            type: Date,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        attachment: String,
        email: {
            type: String,
            require: true,
        },
        facebook: {
            type: String,
            require: true,
        },
        instagram: {
            type: String,
            require: true,
        },
        tiktok: {
            type: String,
            require: false,
        },
    },
    { timestamps: true }
);
export const InfoModule = mongoose.model("Info", schema);
