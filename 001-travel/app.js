const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const urlencoded = bodyparser.urlencoded({ extended: true });
const json = bodyparser.json();
const mongoose = require('mongoose')
const router = require('./server/gowhere');
const data = require('./db.default');
// set CORS headers
// app.use( (req, res, next)=> {
//     const origin = req.headers.origin;

//     //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//     res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });



app.use(json);
app.use(urlencoded);
app.use(router);

mongoose.connect('mongodb://localhost:27017/Mobile_practice');
const db = mongoose.connection;
db.once("open", () => console.log("database open successed"))
db.once("error", () => console.log("database open failed"))
//test insert data
const gw = require('./models/gowhere');

// console.log(data.cityData);
// gw.create(data.detailData).then(r => {
//     console.log('done');
// });


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3008, () => console.log('listened'))

