const express = require('express');
const getInfoPage = require('../controllers/info.controller');
const router = express.Router()

router.get('/', getInfoPage) 

module.exports = router