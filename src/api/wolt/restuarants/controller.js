const { response, distance} = require('../../../util');
const Restaurant = require('../../../config/database');

async function fetchRecords(req, res) {
    const allowed = ['query', 'lon', 'lat'];
    let receivedArray = Object.keys(req.query);
    let illegal = [];
    receivedArray.reduce((acc, curr) => {
        if (!allowed.includes(curr)) {
            illegal.push(curr);
        }
    }, 0);
    if (illegal.length > 0) {
        console.log(`Received "${illegal}" which are not allowed`);
    }
    if (receivedArray.includes('query') && req.query.query === "" || req.query.query === null) {
        console.log(`query must have atleast one element to search, thank you`);
    }
    if (receivedArray.includes('lon') && !receivedArray.includes('lat')
        || receivedArray.includes('lat') && !receivedArray.includes('lon')) {
        console.log(`Both longitude and latitude must be passed at the same time`);
    }

    const { query, lon, lat} = req.query;

    const restaurants = Restaurant.restaurants;
    const results = restaurants.filter((object, index) => {
        console.log(distance(lat, lon, object.location[0], object.location[1]));
        if (object.name.search(query) !== -1 || object.description.search(query) !== -1
        && distance(lat, lon, object.location[0], object.location[1], 'M') < 3) {
            return object;
        }
    }, 0);

    return response.success(res, 201, results, null);
}

module.exports = {fetchRecords};
