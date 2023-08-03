const donorsController = require('../controllers/donorsControllers')
const express = require('express')
const router = express.Router()
router.route('/donors/register').post(donorsController.registerDonor)
router.route('/donors/login').post(donorsController.loginDonor)
router.route('/donors/:id').get(donorsController.getDonorById)

module.exports = router