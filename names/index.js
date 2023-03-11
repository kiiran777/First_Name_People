const peopleName = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleName) => {
  return getFirstNames(peopleName);
};

module.exports = getPeopleInCity;
