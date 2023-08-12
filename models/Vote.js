const mongoose = require('mongoose')
const VoteShema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true },
  proposalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proposal', required: true },
  cat: { type: String, required: true, enum: ['Upvote', 'Downvote'] },
  stake: { type: Number, required: true },
  reason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})
const Vote = mongoose.model('Vote', VoteShema)
module.exports = Vote