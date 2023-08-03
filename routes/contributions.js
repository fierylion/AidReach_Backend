const contributionController = require('../controllers/contributionsControllers')
const express = require('express')

const router = express.Router()
router.route('/contributions').post(contributionController.makeContribution)
router.route('/contributions/:id').get(contributionController.getContributionById)
router.route('/contributions/donor/:donorId').get(contributionController.getContributionsByDonor)
module.exports = router