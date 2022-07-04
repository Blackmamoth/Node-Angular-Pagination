const City = require("../models/cityModel");
const states = require("../statesData.json");

const addStates = async () => {
  states.forEach(async (state) => {
    await City.create(state);
  });
};

module.export = {
  getStates,
};
