const express = require('express')
const router = express.Router()
router.route('/contributions').post()
router.route('/contributions/:id').get()
router.route('/contributions/donor/:donorId').get()
module.exports = router