const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Review, Tutor, User } = require("../../models");

// POST /api/reviews -- create one review
router.post("/", withAuthJson, async (req, res) => {
  try {
    const reviewData = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    const review = reviewData.toJSON();

    res.json(review);
  } catch (err) {
    res.status(400).json({
      message: "Bad request",
    });
  }
});

// PUT /api/reviews/:id -- update one review

// DELETE /api/reviews/:id -- delete one review
router.delete("/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: { id: req.params.id },
    });
    if (!reviewData) {
      res.status(404).json({ message: "No review with this id!" });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
