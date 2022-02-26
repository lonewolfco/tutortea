const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Tutor } = require("../../models");



router.post("/", withAuthJson, async (req, res) => {
  try {
    const tutorData = await Tutor.create(req.body);
    const tutor = tutorData.toJSON();
    res.json(tutor);   
}
catch (err) {
    res.status(400).json(err);
}
});






 

module.exports = router;
