const mongoose = require('mongoose')

const ngoSchema = new mongoose.Schema({
  ngoName: { type: String, required: true },
  contactPersonName: { type: String, required: true },
  contactEmail: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  verificationStatus: { type: Boolean, default: false },
})

const NGO = mongoose.model('NGO', ngoSchema)

module.exports = NGO
