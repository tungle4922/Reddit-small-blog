const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
     name: {
        type: String,
        require: true
     },
     age: {
        type: String,
        require: true
     },
     about: {
        type: String,
        require: true
     },
     avaUrl: {
        type: String,
        require: true
     },
     themeColor: {
        type: String,
        require: true
     }
})

const postSchema = new mongoose.Schema({
   title: {
      type: String,
      require: true
   },
   description: {
      type: String,
      require: true
   },
   tag: {
      type: String,
      require: true
   },
   selectedImgUrl: {
      type: String,
      require: true
   }
})

let Profile = mongoose.model("Profile", profileSchema);
let Post = mongoose.model("Post", postSchema)

module.exports = { Profile, Post };