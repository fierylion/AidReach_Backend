const express = require('express')
const ngosController = require('../controllers/ngosControllers')
const router = express.Router()
router.route('/ngos/register').post(ngosController.registerNGO)
router.route('/ngos/login').post(ngosController.loginNGO)
router.route('/ngos/:id').get(ngosController.getNGOById)
router.route('/ngos/:id').patch(ngosController.updateNGO)

module.exports = router