const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionsController')
router.route('/transactions').post(transactionController.recordTransaction)
router.route('/transactions/:id').get(transactionController.getTransactionById)
router.route('/transactions/donor/:donorId').get(transactionController.getTransactionsByDonor)
module.exports = router
