const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URI);

sequelize
  .authenticate()
  .then(() => debug("Connection has been established successfully"))
  .catch((error) => debug("Unable to connect to the database:" + error));

module.exports = sequelize;
