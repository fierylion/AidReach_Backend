const { UnauthenticatedError, BadRequestError } = require("../errors");
const Ngo = require("../models/Ngos");

const verifyNgo = async (req, res) => {
 const {ngoId} = req.params;
  const ngo = await Ngo.findByIdAndUpdate(ngoId, {verified:true}, {new:true})
  if(!ngo) throw new BadRequestError('NGO not found');
  res.status(200).json({message: 'NGO verified successfully'})
}
module.exports ={verifyNgo} ;