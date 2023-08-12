// Middleware to set the Content-Type header
const setContentTypeHeader = (req, res, next) => {
  // Assuming the file field name is 'image'
  if (req.file) {
    req.file.contentType = req.file.mimetype
  }
  next()
}
module.exports = setContentTypeHeader
