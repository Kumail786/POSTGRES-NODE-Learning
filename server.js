const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const db = require('./config-postgres')

app.use(bodyparser.json())
app.use(
    bodyparser.urlencoded({
      extended: true,
    })
  )
  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.listen(8000,()=>{
    console.log("server connected port 8000")
})
