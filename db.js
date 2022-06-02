const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://user:passlolcom:5432/electronic-products"
);

module.exports = sequelize;
