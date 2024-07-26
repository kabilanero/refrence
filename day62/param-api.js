const { Result } = require("express-validator");

exports.getAllrestaurant = (req, res) => {
    const cityName = req.params.cityName;
    restaurants.find({city : cityName}).then((Result) => {
        res.status(200).json({
            message: `restaurents fetched for city ${cityName}`,
            restaurants: Result,
        });
    }).catch((error) => {
        res.status(500).json({
            message: "error in database",
            error: error,
        });
    });
};