const express = require('express');
const router = express.Router();
const getGameProgress = require('../parser');

router.get('/', async function(req, res, next) {
    const result = await getGameProgress();
    res.render('index', result);
});

module.exports = router;