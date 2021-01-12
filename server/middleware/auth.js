const jwt = require("jsonwebtoken");
const aws = require("aws-sdk");

const auth = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token)
      return res
        .status(401)
        .json({ msg: "You cannot delete this account, authorization denied" });

    const aws = require("aws-sdk");

    let s3 = new aws.S3({
      userToken: process.env.JWT_SECRET,
    });

    const verified = jwt.verify(token, s3);
    if (!verified) return res.status(401).json({ msg: "Authorization denied" });

    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
