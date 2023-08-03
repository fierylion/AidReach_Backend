require('dotenv').config()
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



const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')

}
)
app.use('', transactionsRouter)

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