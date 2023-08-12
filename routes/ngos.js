const express = require('express')
const ngosController = require('../controllers/ngosControllers')
const authentication = require('../middleware/authentication')
const validateNgo = require('../middleware/validateNgos')
const router = express.Router()

router.route('/register').post(ngosController.registerNGO)
router.route('/login').post(ngosController.loginNGO)
router.route('').get(authentication,validateNgo,ngosController.getNGO)
router.route('/verifyDetails').post(authentication, validateNgo, ngosController.updateDetails)
router.route('/:id').patch(ngosController.updateNGO)

module.exports = router