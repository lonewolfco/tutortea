const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Tutor} = require("../../models");



router.post("/", withAuthJson, async (req, res) => {
    const tutors = await Tutor.create({
      ...req.body,
      user_id: req.session.user_id,
    });
  
    res.json(tutors);
  });








module.exports = router;
