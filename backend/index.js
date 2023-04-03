const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const profileRoute = require("./routes/profile");
const postRoute = require("./routes/posts")

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 8080;

// use cors
app.use(cors());

//connect to mongodb ..
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

//ROUTES
app.use("/", profileRoute);
app.use("/",postRoute);

//connect to server
app.listen(PORT, () => console.log("Server connected"));

// app.post("/v1/update", (req, res) => {
//   setTimeout(()=> {
//     res.status(200).json(req.body);
//   }, [2000]);
// });
