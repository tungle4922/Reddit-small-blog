const { Profile } = require("../models/model");

const profileController = {
  //ADD A PROFILE
  addProfile: async (req, res) => {
    try {
      const newProfile = new Profile(req.body);
      const savedProfile = await newProfile.save();
      res.status(200).json(savedProfile);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET PROFILE INFOMATION
  getProfileInfo: async (req, res) => {
    try {
      const profile = await Profile.find();
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE PROFILE
  updateProfile: async(req,res) => {
    try {
      const profile = await Profile.findById(req.params.id)
      await profile.updateOne({$set: req.body})
      res.status(200).json("Updated profile successfully!")
    } catch (err) {
        res.status(500).json(err);
    }
  },
};

module.exports = profileController;
