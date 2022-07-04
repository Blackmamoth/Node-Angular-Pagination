const { Sequelize, Model } = require("sequelize");
require("dotenv").config();

const DB_USER = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

class State extends Model {}

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { connectDB, sequelize, State };
