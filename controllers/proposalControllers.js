const Proposal= require("../models/Proposal");
const NGO = require("../models/Ngos");
const {StatusCodes:status } = require('http-status-codes')
// Submit a new proposal by an NGO
const submitProposal = async (req, res) => {
  // Implementation for submitting a new proposal
  const {id:ngoId} = req.user;
  const {proposalDetails, totalAmount} = req.body;
  const proposal = await Proposal.create({...req.body, ngoId})
  res.status(201).json({message: "Proposal submitted successfully", status: proposal.status})
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
}
