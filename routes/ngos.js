const express = require('express')
const router = express.Router()
router.route('/ngos/register').post()
router.route('/ngos/login').post()
router.route('/ngos/:id').get()
router.route('/ngos/:id').patch()
router.route('/ngos/:id').delete()
module.exports = router