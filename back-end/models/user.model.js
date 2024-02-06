import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female', 'other'],
        },
        profilePic: {
            type: String,
            default: '',
        },
    },
    {
        timestamps: true,
    },
)

export default mongoose.model('User', userSchema)
