const express = require('express')
const router = express.Router()
router.route('/donors/register').post()
router.route('/donors/login').post()
router.route('/donors/:id').get()
module.exports = router