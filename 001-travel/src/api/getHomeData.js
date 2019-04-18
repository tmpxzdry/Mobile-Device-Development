const $ = require('axios');

function getHomeData() {
    return new Promise((resolve, reject) => {
        $.get('/api/getHomeData?data_name=homeData',).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getHomeData,
}