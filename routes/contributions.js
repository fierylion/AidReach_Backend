const contributionController = require('../controllers/contributionsControllers')
const express = require('express')
const validateDonor = require('../middleware/validateDonors')
const authenticationMiddleware = require('../middleware/authentication')
const router = express.Router()
router.route('').post(contributionController.makeContribution)
router.route('/:id').get(contributionController.getContributionById)
router.route('/donor/:donorId').get(contributionController.getContributionsByDonor)
module.exports = router