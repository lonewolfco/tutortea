const router = require("express").Router();
const { withAuth } = require("../utils/auth");
const { Tutor, Review } = require("../models");

// Use the custom middleware before allowing the user to access tutors and reviews
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      toast: req.query.toast,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    toast:req.query.toast,
  });
});

// create review
router.get("/spilltea", withAuth, async (req, res) => {
  const tutorsData = await Tutor.findAll(); // Server-side render

  const tutors = tutorsData.map((tutor) => tutor.toJSON());

  res.render("spilltea", {
    tutors,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
  });
});

// Logout route
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("logout", {
    toast:req.query.toast,
  });
});

router.get("/tutorportal",withAuth, async (req, res) => {
  
  const tutorsData = await Tutor.findAll(); // Server-side render

  const tutors = tutorsData.map((tutor) => tutor.toJSON());

  res.render("tutor-portal", {
    tutors,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
  });
});




module.exports = router;




