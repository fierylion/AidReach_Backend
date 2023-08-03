const express = require('express')
const allocationController = require('../controllers/allocationsControllers')
const router = express.Router()
router.route('/allocations').post(allocationController.allocateFunds)
router.route('/allocations/:id').get(allocationController.getAllocationById)
router.route('/allocations/proposal/:proposalId').get(allocationController.getAllocationsByProposal) // get all allocations for a proposal
