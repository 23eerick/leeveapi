import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    peoplesType: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)
