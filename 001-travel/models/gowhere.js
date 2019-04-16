const mongoose = require('mongoose');

var gowhereSchema = mongoose.Schema({
    swiperList: {
        type: Array
    },
    iconList: Array,
    recommendList: Array,
    weekendList: Array,
})

module.exports = mongoose.model('gowhere', gowhereSchema, 'gowhere')