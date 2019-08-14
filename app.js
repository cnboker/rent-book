require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRoute = require('./src/routes/auth')
const BookRoute = require('./src/routes/books')
const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser({
  extended: false
}))

// Middleware Route
app.use('/', AuthRoute)
app.use('/books', BookRoute)