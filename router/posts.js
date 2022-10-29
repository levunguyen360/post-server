import express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
} from "../controller/posts.js";

const router = express.Router();

router.route("/posts").get(getPosts);

router.post("/post", createPost);

router.post("/post/update", updatePost);

router.delete("/post/delete:id", deletePost);

export default router;
