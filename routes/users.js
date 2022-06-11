const express = require("express");
const router = express.Router();

const User = require("../models/user");

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/", function (req, res, next) {
  User.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /users/:id:
 *   get:
 *     summary: Retrieve one user
 *     description: Retrieve one user using
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID of the user to retrieve.
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/:id", function (req, res, next) {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Post one user
 *     description: Post one product
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.post("/", function (req, res, next) {
  const newUser = { ...req.body };
  User.create(newUser)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Retrieve one user
 *     description: Retrieve one user using
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID of the user to delete.
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: Deletes a user.
 */
router.delete("/:id", function (req, res, next) {
  User.delete({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /users/:id:
 *   patch:
 *     summary: Retrieve one user
 *     description: Retrieve one user using
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: Numeric ID of the user to update.
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: A list of users.
 *
 */
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
