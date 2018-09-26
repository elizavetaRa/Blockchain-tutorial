const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    progress: {
        type: Number,
        default: 0,
    },
    blockchain: {
        type:  Schema.Types.ObjectId,
        ref: "Blockchain",
        autopopulate: true
    }
})

module.exports = mongoose.model('User', userSchema)
