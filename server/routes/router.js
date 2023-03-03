const express  = require('express')
const router = express.Router()
const {postLogin,postSignUp, getHome} =  require('../controllers/control')

router.route('/login').post(postLogin)
router.route('/signup').post(postSignUp)
router.route('/home').get(getHome)

module.exports = router