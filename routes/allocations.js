const express = require('express')
const router = express.Router()
router.route('/allocations').post()
router.route('/allocations/:id').get()
router.route('/allocations/proposal/:proposalId').get() // get all allocations for a proposal
