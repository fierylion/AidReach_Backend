
const validateNgo = async (req, res, next)=>{
 const {type, id} = req.user;
 if(type !== 'ngo') throw new UnauthenticatedError('Invalid access, You are not a ngo but a '+type); 
 next();
 
}
module.exports = validateNgo;