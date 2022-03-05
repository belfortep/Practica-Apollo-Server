const { gql } = require('apollo-server-express')

//interesante manera de definir tipos de graphql con apollo server
const typeDefs = gql`

    type Task{
        id: ID
        title: String
        description: String
    }

    type Query{
        hello: String
        getAllTasks: [Task]
        getTask(id: ID): Task   #necesario definir que le paso parametros ademas de lo que me devuelve
        
    }

    input TaskInput{    #para enviar los datos, creo un tipo input, los datos que va a recibir una funcion
        title: String
        description: String
    }

    type Mutation{
        createTask(task: TaskInput!): Task    #le paso un titulo y una descripcion, me devuelve una tarea
        deleteTask(id: ID!): String         #el simbolo ! significa que es requerido
        updateTask(id: ID!, task: TaskInput): Task
    }

    



`

module.exports = { typeDefs }