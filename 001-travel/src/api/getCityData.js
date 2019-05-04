const $ = require('axios');
const config = require('../../custom.config')

function getCityData() {
    return new Promise((resolve, reject) => {
        $.get(`${config.url}/api/qunar/getCityData?data_name=cityData`).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getCityData,
}