const express = require('express');

const restaurantRoute = require('./restuarants');

const router = express.Router();

router.use(restaurantRoute);

module.exports = router;
