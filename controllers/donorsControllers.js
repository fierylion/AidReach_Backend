
const { BadRequestError, UnauthenticatedError } = require('../errors')
const {StatusCodes:status} = require('http-status-codes')
const Donor = require('../models/Donors')
const Vote = require('../models/Vote')
// Register a new donor
const registerDonor = async (req, res) => {
  console.log('received request')
  const donor = await Donor.create(req.body)
  const token = donor.createJwt()
  res.status(status.CREATED).json({ donor: { name: donor.name, email: donor.email }, token })
  
}

// Login a donor
const loginDonor = async (req, res) => {
  // Implementation for donor login
  const {email, password} = req.body;
  if(!email || !password){
    throw new BadRequestError("Please provide email and password!")
  }
  const donor = await Donor.findOne({email})
  if(!donor) throw new UnauthenticatedError('Provided email does not exist')
  const isMatch = await donor.verifyPassword(password);
  if(!isMatch) throw new UnauthenticatedError('Incorrect password')
  const token  = donor.createJwt();
  res
    .status(status.OK)
    .json({ donor: { name: donor.name, email: donor.email }, token })

  
}

// Get donor details by ID
const getDonorById = async (req, res) => {
  // Implementation to fetch donor details by ID
  const {id} = req.user;
  const donor = await Donor.findById(id)
  if(!donor) throw new BadRequestError('No donor with the provided ID')
  const {name, totalDonations, votes, createdAt} = donor;
  res.status(status.OK).json({donor:{name, totalDonations, votes, createdAt}})

}

//Vote function should be shifted to a separate controller
const createVote = async (req, res) => {
  const {stake, vote, reason}= req.body;
  if(stake&&vote&&reason){
  const {id:donorId} = req.user;
  const {propId, cat} = vote;
  if(!propId||!cat) throw new BadRequestError('Please provide proposal ID and category')

  const vot = await Vote.create({donorId, proposalId:vote.propId, cat, stake, reason })
  await Donor.findByIdAndUpdate(
    donorId,
    { $inc: { votes: 1 } },
    { new: true }
  )
  }
  res.status(status.CREATED).json({message: "Vote submitted successfully"})


}
  
// Update donor information
const updateDonor = async (req, res) => {
  // Implementation to update donor information
}

// Delete a donor account
const deleteDonor = async (req, res) => {
  // Implementation to delete a donor account
}

module.exports = {
  registerDonor,
  loginDonor,
  getDonorById,
  updateDonor,
  deleteDonor,
  createVote
}
