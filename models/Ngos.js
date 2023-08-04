const mongoose = require('mongoose')

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ngoAddress: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  joinLetter: { type: String, default: '' },
  verificationStatus: { type: Boolean, default: false },
})
ngoSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

ngoSchema.methods.createJwt = function () {
  const token = jwt.sign(
    { id: this._id, type: 'ngo' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
  return token
}
ngoSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const NGO = mongoose.model('NGO', ngoSchema)

module.exports = NGO
