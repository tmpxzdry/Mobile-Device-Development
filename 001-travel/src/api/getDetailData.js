const $ = require('axios');

function getDetailData(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        $.get(`/api/getDetailData?data_name=detailData&id=${id}`).then(r => {
            resolve(r.data);
        }).catch(e => {
            reject(e);
        })
    })
}

export default {
    getDetailData,
}