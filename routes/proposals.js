const express = require('express')
const router = express.Router()
const uploadImage = require('../middleware/upload')
const validateNgo = require('../middleware/validateNgos')
const setFileHeader= require('../middleware/setFileHeader')
const proposalController = require('../controllers/proposalControllers')
const authenticationMiddleware = require('../middleware/authentication')
router
  .route('/proposals')
  .post(
   authenticationMiddleware,
    validateNgo,
    setFileHeader,
    uploadImage.single('image'),
    proposalController.submitProposal
  )
  .get(authenticationMiddleware, proposalController.getProposalsByNGO)// instead of using propasalID we get id from json token 
router.route('/proposals/all').get(proposalController.getAllProposals)
router.route('/proposals/:id').get(proposalController.getProposalById).patch(proposalController.updateProposalStatus)
router.route('/proposals/ngo/:ngoId')
module.exports = router