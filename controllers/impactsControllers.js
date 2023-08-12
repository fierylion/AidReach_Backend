const Impact = require('../models/Impacts')
const { StatusCodes: status } = require('http-status-codes')
const createOne = async (req, res) => {
  const dataInput= await Impact.findOne();
  if(!dataInput){
    await Impact.create({ donationAmount: 0, noNgos: 0, noProposals: 0 })
  }
  res.status(status.CREATED).json({created:true})

}
const getImpact = async (req, res)=>{
  const data = await Impact.findOne();
  if(data) res.status(status.OK).json({data});
  else res.status(status.OK).json({data:{donationAmount:0, noNgos:0, noProposals:0}})
}
// Record a new impact entry for a specific allocation
const recordImpact = async (req, res) => {
  // Implementation for recording a new impact entry
}

// Get impact details by ID
const getImpactById = async (req, res) => {
  // Implementation to fetch impact details by ID
}

// Get all impacts related to a specific allocation
const getImpactsByAllocation = async (req, res) => {
  // Implementation to fetch all impacts related to a specific allocation
}

module.exports = {
  createOne,
  recordImpact,
  getImpactById,
  getImpactsByAllocation,
  getImpact
}
