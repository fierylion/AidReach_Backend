const Proposal= require("../models/Proposal");
const Impact = require('../models/Impacts')
const NGO = require("../models/Ngos");
const {StatusCodes:status } = require('http-status-codes')
// Submit a new proposal by an NGO
const submitProposal = async (req, res) => {
  // Implementation for submitting a new proposal
  
  const {id:ngoId} = req.user;
  const {title, description, amount} = req.body;
  
  const image = req.file.location;
  

  const proposal = await Proposal.create({title, description, amount, ngoId, image})
  const imp = await Impact.findOneAndUpdate(
    {},
    { $inc: { noProposals: proposal.amount } },
    { new: true }
  )
 

  res.status(201).json({message: "Proposal submitted successfully", image})
}
// get all proposals
const getAllProposals = async (req, res) => {
  // Implementation for submitting a new proposal
  const proposals = await Proposal.find({})
  res.status(status.OK).json({proposals})
}
// Get proposal details by ID
const getProposalById = async (req, res) => {
  // Implementation to fetch proposal details by ID
}

// Get all proposals submitted by a specific NGO
const getProposalsByNGO = async (req, res) => {
  // Implementation to fetch all proposals submitted by a specific NGO
  const {id:ngoId} = req.user;
  const proposals = await Proposal.find({ngoId})
  res.status(status.OK).json(
    {
      proposals
    }
  )
}

// Update proposal status (e.g., approve or reject)
const updateProposalStatus = async (req, res) => {
  // Implementation to update proposal status
  
}

module.exports = {
  submitProposal,
  getProposalById,
  getProposalsByNGO,
  updateProposalStatus,
  getAllProposals
}
