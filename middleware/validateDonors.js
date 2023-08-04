const {UnauthenticatedError} = require('../errors')
const validateDonor = async (req, res, next)=>{

 const {type, id} = req.user;
 const { id: urlID } = req.params
 console.log(id)
 if (urlID && id !== urlID) throw new UnauthenticatedError('You are not Authorized!')
 if(type !== 'donor') throw new UnauthenticatedError('Invalid access, Your are not a donor but a '+type);
 next();

}
module.exports = validateDonor;