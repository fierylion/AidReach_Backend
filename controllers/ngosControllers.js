const  NGO  = require('../models/Ngos')
const { BadRequestError } = require('../errors')
const {StatusCodes:status} = require('http-status-codes')

// Register a new NGO
const registerNGO = async (req, res) => {
  // Implementation for NGO registration
  const { name, email, password, phoneNumber } = req.body;
  if(!name || !email || !password || !phoneNumber){
    throw new BadRequestError("Please provide all the required fields!")
  }
  const ngo = await NGO.create({name, email, password, phoneNumber})
  const token = ngo.createJwt()
  res.status(status.CREATED).json({ ngo: { name: ngo.name, email: ngo.email }, token })
}

// Login an NGO
const loginNGO = async (req, res) => {
  // Implementation for NGO login
  const {email, password} = req.body;
  if(!email || !password){
    throw new BadRequestError("Please provide email and password!")
  }
  const ngo = await NGO.findOne({email})
  if(!ngo) throw new UnauthenticatedError('Provided email does not exist')
  const isMatch = await ngo.verifyPassword(password);
  if(!isMatch) throw new UnauthenticatedError('Incorrect password')
  const token  = ngo.createJwt();
  res
    .status(status.OK)
    .json({ ngo: { name: ngo.name, email: ngo.email }, token })

}

// Get NGO details by ID
const getNGOById = async (req, res) => {
  // Implementation to fetch NGO details by ID
}

// Update NGO information
const updateNGO = async (req, res) => {
  // Implementation to update NGO information
  const {id} = req.params;
  const {ngoAddress, joinLetter} = req.body;
  if(!ngoAddress || !joinLetter){
    throw new BadRequestError("Please provide all the required fields!")
  }
  await NGO.findByIdAndUpdate(id, {ngoAddress, joinLetter}, {new:true})
  res.status(status.OK).json({message: 'NGO details updated successfully'})
}

// Delete an NGO account
const deleteNGO = async (req, res) => {
  // Implementation to delete an NGO account
}

module.exports = {
  registerNGO,
  loginNGO,
  getNGOById,
  updateNGO,
  deleteNGO,
}
