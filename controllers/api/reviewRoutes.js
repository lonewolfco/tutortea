const router = require("express").Router();
const {
    withAuthJson
} = require('../../utils/auth');
const {
    Review,
    Tutor,
    User
} = require("../../models");

// POST /api/reviews -- create one review
router.post('/', withAuthJson, async (req, res) => {
    const review = await Review.create(req.body);
});

// PUT /api/reviews/:id -- update one review

// DELETE /api/reviews/:id -- delete one review


module.exports = router;