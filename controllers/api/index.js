const router = require("express").Router();
const userRoutes = require("./userRoutes");
//const htmlRoutes = require("./htmlRoutes");

//sets user login route to /api/user
router.use("/user", userRoutes);
//router.use("/html", htmlRoutes);

module.exports = router;
