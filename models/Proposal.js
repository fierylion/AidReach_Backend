const mongoose = require('mongoose')

const proposalSchema = new mongoose.Schema({
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
  proposalDetails: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  totalAmount: { type: Number, required: true },
  allocatedAmount: { type: Number, default: 0 },
  remainingAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
})

const Proposal = mongoose.model('Proposal', proposalSchema)

module.exports = Proposal
