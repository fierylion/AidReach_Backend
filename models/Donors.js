const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  totalDonations: {type:Number, default:0}
})

donorSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

donorSchema.methods.createJwt=function(){
  const token =jwt.sign({id:this._id, type:'donor'},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_LIFETIME})
  return token
}
donorSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}
const Donor = mongoose.model('Donor', donorSchema)

module.exports = Donor
