const gw = require('../models/gowhere');
const express = require('express');
const router = express.Router();

router.put('/createData', (req, res) => {
    gw.create(req.body).then(data => {
        res.send({ status: 'ok', id: data._id })
    }).catch(err => {
        res.send(err);
    })
})
router.get('/getHomeData', (req, res) => {
    gw.find({}).then(data => {
        res.send({ status: 'ok', HomeData: data })
    }).catch(e => res.send(e));
})

module.exports = router;