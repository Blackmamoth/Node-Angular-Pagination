const { State, sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

State.init(
  {
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    country_code: DataTypes.STRING,
    country_name: DataTypes.STRING,
    state_code: DataTypes.STRING,
    type: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    tableName: "states",
    modelName: "State",
    timestamps: false,
  }
);

module.exports = State;
