const mongoose = require('mongoose')

const proposalSchema = new mongoose.Schema({
  ngoId: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Proposal = mongoose.model('Proposal', proposalSchema)

module.exports = Proposal
