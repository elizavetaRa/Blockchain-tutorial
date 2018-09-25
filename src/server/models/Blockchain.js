const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blockchainSchema = new Schema({
    genesisBlock: {
        type: Schema.Types.ObjectId, ref: 'Block'
    },
    blocks:[{type: Schema.Types.ObjectId, ref: 'Block'}]
})

module.exports = mongoose.model('Blockchain', blockchainSchema)
