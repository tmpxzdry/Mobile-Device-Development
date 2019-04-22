const $ = require('axios');

function getCityData() {
    return new Promise((resolve, reject) => {
        $.get('/api/getCityData?data_name=cityData',).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getCityData,
}