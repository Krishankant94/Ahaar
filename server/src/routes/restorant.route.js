let express = require("express");
let router = express.Router();
let Restorant = require("../modal/restorant.modal");

router.get("/getrestorants", (req, res) => {
  Restorant.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
