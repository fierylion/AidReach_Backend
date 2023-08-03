const express = require('express')
const router = express.Router()
router.route('/proposals').post(). // instead of using propasalID we get id from json token 
router.route('/proposals/:id').get().patch()
router.route('/proposals/ngo/:ngoId').get()
module.exports = router