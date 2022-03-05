const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./typeDefs')
const resolvers = require('./resolvers')
const { connectDB } = require('./db')

const app = express()
connectDB()

module.exports = app

async function start() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers

    })

    await apolloServer.start()

    apolloServer.applyMiddleware({ app: app })//gracias a apollo, al entrar al localhost/graphql, tengo una pantalla hecha

    app.use('*', (req, res) => res.status(404).send('Not found'))

    app.listen(3000, () => {
        console.log('server port 3000')
    })

}

start()