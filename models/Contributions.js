const mongoose = require('mongoose')

const contributionSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Contribution = mongoose.model('Contribution', contributionSchema)

module.exports = Contribution
