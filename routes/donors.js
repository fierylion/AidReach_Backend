const donorsController = require('../controllers/donorsControllers')
const authenticationMiddleware = require('../middleware/authentication')
const validateDonor = require('../middleware/validateDonors')
const express = require('express')
const validateID = require('../middleware/validateAdmin')
const router = express.Router()
router.route('/register').post(donorsController.registerDonor)
router.route('/login').post(donorsController.loginDonor)
router.route('/:id').get( authenticationMiddleware,validateDonor,donorsController.getDonorById)

module.exports = router