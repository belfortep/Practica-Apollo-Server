
const { connect } = require('mongoose')


const connectDB = async () => {
    try {

        await connect('mongodb://localhost/myfaboloustaskdb')

        console.log('DB connected')

    } catch (err) {

        console.log(err)

    }

}

module.exports = { connectDB }
