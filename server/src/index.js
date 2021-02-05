const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//routes
const _users = require("./routes/userRouter")


// set up express
const app = express();
app.use(express.json());
app.use(cors());

if (process?.env?.NODE_ENV?.trim() === 'dev'){
    console.log('dev')
}else{
    const buildPath = path.join(__dirname, "../../client", "build");
    app.use(express.static(buildPath));
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
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
app.use("/api/users", _users);
