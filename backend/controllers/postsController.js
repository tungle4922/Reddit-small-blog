const { Post } = require("../models/model");

const postController = {
  //ADD A POST
  addPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (error) {
      console.log(error);
    }
  },
  //GET ALL POST
  getAllPost: async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error)
    }
  }
};

module.exports = postController;
