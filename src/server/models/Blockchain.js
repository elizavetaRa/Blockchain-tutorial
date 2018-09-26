const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blockchainSchema = new Schema({
    genesisBlock: {
        type: Schema.Types.ObjectId, ref: 'Block',
        autopopulate: true
    },
    blocks:[{type: Schema.Types.ObjectId, ref: 'Block', 
    autopopulate: true}]
})

module.exports = mongoose.model('Blockchain', blockchainSchema)
