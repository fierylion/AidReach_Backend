const mongoose = require('mongoose')

const impactSchema = new mongoose.Schema({
  donationAmount: { type: Number, default: 0 },
  noNgos: { type: Number, default: 0 },
  noProposals: { type: Number, default: 0 },
})

const Impact = mongoose.model('Impact', impactSchema)


module.exports = Impact
