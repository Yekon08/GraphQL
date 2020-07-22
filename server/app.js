const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// Connect to mlab DataBase
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.qd1jj.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => { 
    console.log('now listening port 4000')
})