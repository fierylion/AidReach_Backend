const donorsController = require('../controllers/donorsControllers')
const authenticationMiddleware = require('../middleware/authentication')
const validateDonor = require('../middleware/validateDonors')
const express = require('express')
const validateID = require('../middleware/validateAdmin')
const router = express.Router()
router.route('/register').post(donorsController.registerDonor)
router.route('/login').post(donorsController.loginDonor)
router.route('').get( authenticationMiddleware,validateDonor,donorsController.getDonorById)
router.route('/vote').post(authenticationMiddleware,validateDonor,donorsController.createVote).get(authenticationMiddleware,validateDonor,donorsController.getVotes)

module.exports = router