const mongoose = require('mongoose')

const impactSchema = new mongoose.Schema({
  allocationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Allocation',
    required: true,
  },
  ngosUtilization: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Impact = mongoose.model('Impact', impactSchema)

module.exports = Impact
