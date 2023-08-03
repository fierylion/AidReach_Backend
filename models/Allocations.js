const mongoose = require('mongoose')

const allocationSchema = new mongoose.Schema({
  proposalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proposal',
    required: true,
  },
  amount: { type: Number, required: true },
  allocatedAt: { type: Date, default: Date.now },
})

const Allocation = mongoose.model('Allocation', allocationSchema)

module.exports = Allocation
