const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const buildPath = path.join(__dirname, "../client/", "build");
app.use(express.static(buildPath));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
const aws = require("aws-sdk");

let s3 = new aws.S3({
  dbAccess: process.env.MONGODB_CONNECTION_STRING,
});

mongoose.connect(
  // process.env.MONGODB_CONNECTION_STRING,
  s3,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/userRouter"));
