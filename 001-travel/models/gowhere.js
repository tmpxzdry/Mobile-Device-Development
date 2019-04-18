const mongoose = require('mongoose');

var gowhereSchema = mongoose.Schema({
    data_name: {
        type: String,
        required: true,
        unique: true //若不生效需删除整个数据库在重新配置
    },
    data: {
        type: {},
        required: true
    }
})

module.exports = mongoose.model('gowhere', gowhereSchema, 'gowhere')