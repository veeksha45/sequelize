const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "veeksha", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
