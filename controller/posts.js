import { PostModule } from "../modules/postModule.js";

export const getPosts = async (req, res) => {
     try {
          const posts = await PostModule.find();
          console.log("posts", posts);
          res.status(200).json(posts);
     } catch (error) {
          res.status(500).json({ error: error });
     }
};

export const createPost = async (req, res) => {
     try {
          const newPost = req.body;
          const post = new PostModule(newPost);
          await post.save();
          res.status(200).json(post);
     } catch (error) {
          res.status(500).json({ error: error });
     }
};

export const updatePost = async (req, res) => {
     try {
          const updatePost = req.body;
          const post = await PostModule.findOneAndUpdate({ _id: updatePost._id }, updatePost, {
               new: true,
          });
          res.status(200).json(post);
     } catch (error) {
          res.status(500).json({ error: error });
     }
};

export const deletePost = async (req, res) => {
     try {
          const Post = await PostModule.findById(req.params.id);
          if (!Post) {
               return res.status(404).json({ error: error });
          }
          await Post.remove();
          res.status(200).json({
               success: true,
               message: "Post is deleted.",
          });
     } catch (error) {
          res.status(500).json({ error: error });
     }
};
