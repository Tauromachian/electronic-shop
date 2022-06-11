const express = require("express");
const router = express.Router();

const Product = require("../models/product");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Retrieve a list of products.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get("/products", function (req, res, next) {
  Product.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /products/:id:
 *   get:
 *     summary: Retrieve one product
 *     description: Retrieve one product using
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/products/:id", function (req, res, next) {
  Product.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Post one product
 *     description: Retrieve one product using
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.post("/products", function (req, res, next) {
  const newProduct = { ...req.body };
  Product.create(newProduct)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /products:
 *   delete:
 *     summary: Retrieve one product
 *     description: Retrieve one product using
 *     responses:
 *       200:
 *         description: Deletes a product.
 */
router.delete("/products/:id", function (req, res, next) {
  Product.delete({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

/**
 * @swagger
 * /products/:id:
 *   patch:
 *     summary: Retrieve one product
 *     description: Retrieve one product using
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.patch("/products/:id", function (req, res, next) {
  const newProductFields = { ...req.body };
  Product.update(newProductFields, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
