const $ = require('axios');
const config = require('../../custom.config')


function getHomeData() {
    return new Promise((resolve, reject) => {
        $.get(`${config.url}/api/qunar/getHomeData?data_name=homeData`).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getHomeData,
}