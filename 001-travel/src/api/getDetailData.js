const $ = require('axios');
const config = require('../../custom.config')

function getDetailData(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        $.get(`${config.url}/api/qunar/getDetailData?data_name=detailData&id=${id}`).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getDetailData,
}