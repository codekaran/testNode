var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({ message: "helo" });
});

router.post("/image", function(req, res, next) {
  console.log("thhhrrr  image");
  console.log(req.body);
  res.json({ message: "got the imae" });
});

module.exports = router;
