const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Tutor } = require("../../models");



router.post("/", withAuthJson, async (req, res) => {
    const tutorData = await Tutor.create(req.body);
    const tutor = tutorData.toJSON();
    console.log(tutor);
    res.json(tutor);
  });








module.exports = router;
