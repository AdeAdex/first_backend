const express = require('express');
const  {getUserLandingPage, getStudentInfo, saveFile, postUserInfo, getNodeMailer } = require('../controllers/user.controller');
const router = express.Router()


router.get('/', getUserLandingPage)
router.post('/student', getStudentInfo)
router.post('/cloud', saveFile)
router.post('/signup', postUserInfo)
router.get('/mail', getNodeMailer)


module.exports = router