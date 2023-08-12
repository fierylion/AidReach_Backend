const express = require('express')
const router = express.Router()
const impactControllers = require('../controllers/impactsControllers')
router.route('/create').get(impactControllers.createOne)
router.route('').get(impactControllers.getImpact)
router.route('/impacts/:id').get(impactControllers.getImpactById)
router.route('/impacts/allocation/:allocationId').get(impactControllers.getImpactsByAllocation) // get all impacts for a proposal
module.exports = router