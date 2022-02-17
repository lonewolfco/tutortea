const router = require("express").Router();
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
//const htmlRoutes = require("./htmlRoutes");

//sets user login route to /api/user
router.use("/user", userRoutes);
router.use('/review', reviewRoutes)
//router.use("/html", htmlRoutes);

module.exports = router;