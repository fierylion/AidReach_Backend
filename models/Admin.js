const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password:{type:String, required:true},
})
adminSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})
adminSchema.methods.createJwt = function () {
  const token = jwt.sign(
    { id: this._id, type: 'admin' },
    process.env.JWT_TOKEN,
    { expiresIn: process.env.JWT_LIFETIME }
  )
  return token
}
adminSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}