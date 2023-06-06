const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const addMultiplePeople = require('./addPeople/addPeople')

const app = express()

mongoose.connect(
    'mongodb+srv://jacobuskim:JSLY6bccVaDUZjpj@dashboard.ujdqfva.mongodb.net/dashdb?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
    console.log('Connected to the database')
})

app.get('/add-people', async (req, res) => {
    try {
        await addMultiplePeople()
        res.send('People added successfully')
    } catch (error) {
        console.error('Error adding people:', error)
        res.status(500).send('Error adding people')
    }
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000')
})
