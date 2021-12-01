const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// import bodyParser from "body-parser";

app.use(bodyParser.json);

//Middlewares
// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  const hi = "hihi";
  res.send(hi);
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to DB");
});

//How to we start listening to the server
app.listen(3000);
