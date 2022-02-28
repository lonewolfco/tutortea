const router = require("express").Router();
const { withAuth } = require("../utils/auth");
const { Tutor, Review, User } = require("../models");

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
    res.redirect(307, "/");
    return;
  }
  res.render("login", {
    toast: req.query.toast,
  });
});

//collabrewators page route and render
router.get("/collab", async (req, res) => {
  res.render("collabrewators", {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
  });
});

// Logout route
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect(307, "/");
    return;
  }
  res.render("logout", {
    toast: req.query.toast,
  });
});

// Begin using the custom middleware before allowing the user to access tutors and reviews

// create review - helper function to list all tutors in rendered spilltea page.
router.get("/spilltea", withAuth, async (req, res) => {
  const tutorsData = await Tutor.findAll(); // Server-side render
  const tutors = tutorsData.map((tutor) => tutor.toJSON());

  res.render("spilltea", {
    tutors,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
    toast: req.query.toast,
  });
});

// view all reviews with tutor name
router.get("/sip", withAuth, async (req, res) => {
  const reviewsData = await Review.findAll({
    include: [{ model: Tutor }],
    order: [["createdAt", "DESC"]],
  }); // Server-side render

  //only find my reviews
  const myReviewsData = await Review.findAll({
    where: { user_id: req.session.user_id },
    include: [{ model: Tutor }],
    order: [["createdAt", "DESC"]],
  });

  const reviews = reviewsData.map((review) => review.toJSON());
  const myReviews = myReviewsData.map((myReview) => myReview.toJSON());

  res.render("sip", {
    reviews,
    myReviews,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
    toast: req.query.toast,
  });
});

//Get all tutors
router.get("/tutorportal", withAuth, async (req, res) => {
  const tutorsData = await Tutor.findAll({
    order: [["name"]],
  }); // Server-side render
  const tutors = tutorsData.map((tutor) => tutor.toJSON());

  res.render("tutor-portal", {
    tutors,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
    toast: req.query.toast,
  });
});

//get one user review and render the edit page
router.get("/edit/:id", withAuth, async (req, res) => {
  const myReviewData = await Review.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Tutor,
      },
    ],
  });

  const myReview = myReviewData.toJSON();

  res.render("edit", {
    myReview,
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id,
    username: req.session.username,
    toast: req.query.toast,
  });
});

module.exports = router;
