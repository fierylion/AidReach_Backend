const Contribution = require('../models/Contributions')
const Donor = require('../models/Donors')
const Impact = require('../models/Impacts')
// Make a new contribution
const makeContribution = async (req, res) => {
  const {id:donorId} = req.user;
  const donation = await Contribution.create({...req.body, donorId})
  const updateDonor = await Donor.findOneAndUpdate(
    { _id: donorId },
    { $inc: { totalDonations: donation.amount } },
    { new: true }
  )
  const imp = await Impact.findOneAndUpdate({},{$inc: {donationAmount:donation.amount}}, {new:true})
  res.status(201).json({message: "Contribution made successfully"})

}

// Get contribution details by ID
const getContributionById = async (req, res) => {
  // Implementation to fetch contribution details by ID
}

// Get all contributions made by a specific donor
const getContributionsByDonor = async (req, res) => {
  // Implementation to fetch all contributions made by a specific donor
}

module.exports = {
  makeContribution,
  getContributionById,
  getContributionsByDonor,
}
