const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storedRestaurant(getStoredRestaurant) {
  fs.writeFileSync(filePath, JSON.stringify(getStoredRestaurant));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storedRestaurant: storedRestaurant,
};
