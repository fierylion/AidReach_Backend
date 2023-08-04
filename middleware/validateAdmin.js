const { UnauthenticatedError } = require('../errors')
const validateAdmin = async (req, res, next) => {
  const { type, id } = req.user
 
  if (type !== 'admin')
    throw new UnauthenticatedError(
      'Invalid access'
    )
  next()
}
module.exports = validateAdmin
