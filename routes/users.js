const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", function (req, res, next) {
  User.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.get("/:id", function (req, res, next) {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/", function (req, res, next) {
  const newUser = { ...req.body };
  User.create(newUser)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.delete("/:id", function (req, res, next) {
  User.delete({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

router.patch("/:id", function (req, res, next) {
  const newUserFields = { ...req.body };
  User.update(newUserFields, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
