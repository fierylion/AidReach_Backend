require('dotenv').config()
const cors = require('cors')
const express = require('express')
const connectDB = require('./db/connect')
require('express-async-errors')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const transactionsRouter = require('./routes/transactions')
const allocationsRouter = require('./routes/allocations')
const proposalsRouter = require('./routes/proposals')
const ngoRouter = require('./routes/ngos')
const donorRouter = require('./routes/donors')
const contributionRouter = require('./routes/contributions')
const impactRouter = require('./routes/impacts')
const adminRouter = require('./routes/admin')
const authenticationMiddleware = require('./middleware/authentication')
const validateDonor = require('./middleware/validateDonors')
const validateNgo = require('./middleware/validateNgos')




const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')

}
)
app.use('', transactionsRouter)
app.use('/donor', donorRouter)
app.use('/ngo', ngoRouter)
app.use('',proposalsRouter)
app.use('/impact',impactRouter)
app.use('', allocationsRouter)
app.use('/contribution',authenticationMiddleware,  contributionRouter)
app.use('/admin', adminRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)
const port =process.env.PORT || 5000
const start = async()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to the Database!!')
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })

  } catch(err){
    console.log(err)
  }
}
start()