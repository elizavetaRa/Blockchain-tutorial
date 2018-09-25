const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blockSchema = new Schema({
    index: Number,
    timestamp: String,
    hash: String,
    previoushash: String,
    data: String,
    nonce: Number
})

module.exports = mongoose.model('Block', blockSchema)
