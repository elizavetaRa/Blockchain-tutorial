const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blockchainSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    headerBlock: {
        type: String,
    },
    blocks:[{type: Schema.Types.ObjectId, ref: 'Block'}]
})

module.exports = mongoose.model('Blockchain', blockchainSchema)
