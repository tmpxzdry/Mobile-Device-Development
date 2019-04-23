const $ = require('axios');

function getDetailData() {
    return new Promise((resolve, reject) => {
        $.get('/api/getDetailData?data_name=detailData').then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getDetailData,
}