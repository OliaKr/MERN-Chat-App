const express = require('express')
const dotenv = require('dotenv')
const { append } = require('express/lib/response')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const e = require('cors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()
const app = express()

app.use(express.json()) //to accept JSON Data

app.get('/', (req, res) => {
  res.send('API is Runnig Sucessfully')
})

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server Started on Port ${PORT}`.yellow.bold))
