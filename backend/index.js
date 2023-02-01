import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/businessRoutes'

const app = express()
const PORT = 4000

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/businessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CORS setup
app.use(cors())

routes(app)

app.get('/', (req, res) =>
  res.send(`Our Business application is running on port ${PORT}`)
)

app.listen(PORT, () =>
  console.log(`Your Business server is running on port ${PORT}`)
)
