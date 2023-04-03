const profileController = require("../controllers/profileController")

const router = require("express").Router();

//ADD A PROFILE
router.post("/profile",profileController.addProfile)
//GET PROFILE INFO
router.get("/profile",profileController.getProfileInfo)
//UPDATE PROFILE
router.put("/profile/:id",profileController.updateProfile)

module.exports = router