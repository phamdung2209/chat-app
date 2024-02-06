import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error in connect to MongoDB', error.message)
    }
}

export default connectDB
