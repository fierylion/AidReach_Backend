const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  webUrl: { type: String, default: '' },
  reportUrl:{type:String, default:''},
  reg_no: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  letter: { type: String, default: '' },
  verificationStatus: {
    type: String,
    default: 'unsubmitted',
    enum: ['unsubmitted', 'pending', 'verified'],
  },
  noProposals: { type: Number, default: 0 },
})
ngoSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

ngoSchema.methods.createJwt = function () {
const token = jwt.sign({ id: this._id, type: 'ngo' }, process.env.JWT_TOKEN, {
  expiresIn: process.env.JWT_LIFETIME,
})
return token
}
ngoSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const NGO = mongoose.model('NGO', ngoSchema)

module.exports = NGO
