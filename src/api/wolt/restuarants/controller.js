const { success, fail, notFount} = require('../../../util');
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
        console.log(`query must has atleast one element to search, thank you`);
    }
    if (receivedArray.includes('lon') && !receivedArray.includes('lat')
        || receivedArray.includes('lat') && !receivedArray.includes('long')) {
        console.log(`Both longitude and latitude must be passed at the same time`);
    }
    const { query, lon, lat } = req.query;
}

module.exports = {fetchRecords};
