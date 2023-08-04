
const { BadRequestError, UnauthenticatedError } = require('../errors')
const {StatusCodes:status} = require('http-status-codes')
const Donor = require('../models/Donors')
// Register a new donor
const registerDonor = async (req, res) => {
  const donor = await DonorSchema.create(req.body)
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
  const {id} = req.params;
  const donor = await Donor.findById(id)
  if(!donor) throw new BadRequestError('No donor with the provided ID')
  donor.password = undefined;
  res.status(status.OK).json({donor})

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
}
