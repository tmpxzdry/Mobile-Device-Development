const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const urlencoded = bodyparser.urlencoded({ extended: true });
const json = bodyparser.json();
const mongoose = require('mongoose')
const router = require('./server/gowhere');
const history = require('connect-history-api-fallback')
const config = require('./custom.config')

// if CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;
    const headers = req.headers.host;
    console.log('request come', headers);
    if (config.allowedOrigins.indexOf(origin) >= 0) {
        res.setHeader('Access-Control-Allow-Origin', origin);

        res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    return next();
})


app.use(json);
app.use(urlencoded);
app.use(router);
app.use(history());//支持history api
app.use('/', express.static('./frontend'))
const api = require('./server')
app.use('/api', api)

mongoose.connect(config.database.address + config.database.db);
const db = mongoose.connection;
db.once("open", () => console.log("database open successed"))
db.once("error", () => console.log("database open failed"))

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3008, () => console.log('listened'))

