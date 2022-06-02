const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/product", function (req, res, next) {
  Product.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.get("/product/:id", function (req, res, next) {
  Product.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/product", function (req, res, next) {
  const newProduct = { ...req.body };
  Product.create(newProduct)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
});

router.delete("/product/:id", function (req, res, next) {
  Product.delete({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json(error));
});

router.patch("/product/:id", function (req, res, next) {
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
