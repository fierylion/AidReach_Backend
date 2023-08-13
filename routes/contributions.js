const contributionController = require('../controllers/contributionsControllers')
const express = require('express')
const validateDonor = require('../middleware/validateDonors')
const authenticationMiddleware = require('../middleware/authentication')
const router = express.Router()
router
  .route('')
  .post(validateDonor, contributionController.makeContribution)
  .get(
  
    validateDonor,
    contributionController.getContributionsByDonor
  )
router.route('/:id').get(contributionController.getContributionById)
router.route('')
module.exports = router