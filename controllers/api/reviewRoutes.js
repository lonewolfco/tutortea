const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Review, Tutor, User } = require("../../models");

// POST /api/review -- create one review
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

router.put("/:id", withAuthJson, async (req, res) => {
// PUT /api/review/:id -- update one review
;

  try {
    const updateReview = Review.update(
      {
        ...req.body,
        user_id:req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    const update = updateReview.toJSON();
    res.json(update);
  } catch (err) {
    res.status(400).json({
      message: "Bad request",
    });
  }
});

// DELETE /api/review/:id -- delete one review
router.delete("/:id", withAuthJson, async (req, res) => {
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
