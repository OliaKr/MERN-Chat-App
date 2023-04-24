const express = require('express')
const dotenv = require('dotenv')
const { append } = require('express/lib/response')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is Runnig Sucessfully')
})

app.get('/api/chat', (req, res) => {
  res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
  //   console.log(req.params.id)
  const singleChat = chats.find((c) => c._id === req.params.id)
  res.send(singleChat)
})

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server Started on Port ${PORT}`.yellow.bold))
