const mongoose = require('mongoose')
// Collection: FundPool
const fundPoolSchema = new mongoose.Schema({
  totalFunds: { type: Number, default: 0 },
  remainingFunds: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const FundPool = mongoose.model('FundPool', fundPoolSchema);
