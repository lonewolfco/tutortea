const router = require("express").Router();
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
const tutorRoutes = require("./tutorRoutes");


//const htmlRoutes = require("./htmlRoutes");

//sets user login route to /api/user
router.use("/user", userRoutes);
router.use('/review', reviewRoutes)
router.use('/tutor', tutorRoutes)

//router.use("/html", htmlRoutes);

module.exports = router;