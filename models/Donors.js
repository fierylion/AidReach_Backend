const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
})

const Donor = mongoose.model('Donor', donorSchema)

module.exports = Donor
