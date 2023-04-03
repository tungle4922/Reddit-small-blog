const postController = require("../controllers/postsController");

const router = require("express").Router();

//ADD A POST
router.post("/post",postController.addPost)
//GET ALL POST
router.get("/post",postController.getAllPost)

module.exports = router