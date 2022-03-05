const Task = require("./models/Task")




const resolvers = {


    Query: {

        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        getTask: async (_, args) => {

            const task = await Task.findById(args.id)

            return task

        }
    },

    Mutation: {
        createTask: async (parent, args, context, info) => {

            const { title, description } = args.task

            const newTask = new Task({ title, description })

            await newTask.save()

            return newTask

        },
        deleteTask: async (_, args) => {

            await Task.findByIdAndDelete(args.id)

            return 'Task deleted'
        },
        updateTask: async (_, { task, id }) => {

            const updatedTask = await Task.findByIdAndUpdate(id, {
                $set: task  //actualiza solamente los campos que ya trae el task, esto se puede gracias al $set
            }, { new: true })

            return updatedTask


        }
    }


}

module.exports = resolvers
