const router = require("express").Router();
const auth = require("./auth");

router.use("/", auth);

// router.use("/place",placeRoutes)

module.exports = router