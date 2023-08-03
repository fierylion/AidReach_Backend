const express = require('express')
const router = express.Router()
const proposalController = require('../controllers/proposalControllers')
router.route('/proposals').post(proposalController.submitProposal)// instead of using propasalID we get id from json token 
router.route('/proposals/:id').get(proposalController.getProposalById).patch(proposalController.updateProposalStatus)
router.route('/proposals/ngo/:ngoId').get(proposalController.getProposalsByNGO)
module.exports = router