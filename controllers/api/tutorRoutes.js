const router = require("express").Router();
const { withAuthJson } = require("../../utils/auth");
const { Tutor } = require("../../models");



router.post("/", withAuthJson, async (req, res) => {
    const tutorData = await Tutor.create(req.body);
    const tutor = tutorData.toJSON();
    console.log(tutor);
    res.json(tutor);
  });



  router.put('/:id', async (req, res) => {
    try {
      const tutorData = await Notes.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (![0]) {
        res.status(404).json({ message: 'No tutor with this id!' });
        return;
      }
      res.status(200).json(tutorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });





  router.delete('/:id',  withAuthJson, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(tutorData=> {
          if (!tutorData) {
            res.status(404).json({ message: 'No tutor found with this id' });
            return;
          }
          res.json(tutorData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });



module.exports = router;
