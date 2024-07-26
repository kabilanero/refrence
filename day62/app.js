const express = require("express");
const restaurantdata = require("./JSON/restaurants.json");
const locationsdata = require("./JSON/locations.json");
const mealtypesdata = require("./JSON/MealTypes.json");

const app = express();
const port = 8900;

app.get("/getAllrestaurant",(req, res) => {
     res.send(restaurantdata);
});

app.get("/getAllLocations",(req, res) => {
    res.send(locationsdata);
});

app.get("/getAllmealtypes",(req, res) => {
    res.send(mealtypesdata);
});

app.listen(port,() => {
   console.log(`server listen at:${port}`);
});