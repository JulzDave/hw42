var express = require('express');
var router = express.Router();
familyChores = require('../models/family.model')

router.get('/allchores', function (req, res, next) {

  familyChores.find().then(data => {
      res.json(data)
  })

});


router.put('/mother', function (req, res, next) {

  familyChores.find().then(data => {
    sss = data;
    if (req.body.who === "Mother") {
      var pushedData1 = data[0]._doc.Mother;
      pushedData1.push(req.body.Mother);
      familyChores.findByIdAndUpdate("5c87c94d968e92230c9c705a",
        {
          $set: { Mother: pushedData1 }
        },
        {
          new: true
        },

        function (err, updatedFamilyChores) {
          if (err) throw err;
          res.json(updatedFamilyChores)
        }

      )
    }
  });
});

router.put('/father', function (req, res, next) {

  familyChores.find().then(data => {
    sss = data;
    if (req.body.who === "Father") {
      var pushedData1 = data[0]._doc.Father;
      pushedData1.push(req.body.Father);
      familyChores.findByIdAndUpdate("5c87c94d968e92230c9c705a",
        {
          $set: { Father: pushedData1 }
        },
        {
          new: true
        },

        function (err, updatedFamilyChores) {
          if (err) throw err;
          res.json(updatedFamilyChores)
        }

      )
    }
  });
});
router.put('/bigbrother', function (req, res, next) {

  familyChores.find().then(data => {
    sss = data;
    if (req.body.who === "BigBrother") {
      var pushedData1 = data[0]._doc.BigBrother;
      pushedData1.push(req.body.BigBrother);
      familyChores.findByIdAndUpdate("5c87c94d968e92230c9c705a",
        {
          $set: { BigBrother: pushedData1 }
        },
        {
          new: true
        },

        function (err, updatedFamilyChores) {
          if (err) throw err;
          res.json(updatedFamilyChores)
        }

      )
    }
  });
});
router.put('/littlebrother', function (req, res, next) {

  familyChores.find().then(data => {
    sss = data;
    if (req.body.who === "LittleBrother") {
      var pushedData1 = data[0]._doc.LittleBrother;
      pushedData1.push(req.body.LittleBrother);
      familyChores.findByIdAndUpdate("5c87c94d968e92230c9c705a",
        {
          $set: { LittleBrother: pushedData1 }
        },
        {
          new: true
        },

        function (err, updatedFamilyChores) {
          if (err) throw err;
          res.json(updatedFamilyChores)
        }

      )
    }
  });
});


module.exports = router;
