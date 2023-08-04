const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminControllers')
const validateAdmin = require('../middleware/validateAdmin')
const authenticationMiddleware = require('../middleware/authentication')
router.route('/verifyNgo/:ngoId').get(authenticationMiddleware,validateAdmin,adminController.verifyNgo)
module.exports = router