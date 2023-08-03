const express = require('express')
const router = express.Router()
router.route('/impacts').post()
router.route('/impacts/:id').get()
router.route('/impacts/allocation/:allocationId').get() // get all impacts for a proposal
module.exports = router