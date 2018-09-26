const express = require('express')
const router = express.Router()
const User = require("../../models/User");
const Blockchain = require("../../models/Blockchain");
const Block = require('../../models/Block')

const SHA256 = require("crypto-js/sha256");
 

const authRoutes = require('./auth')
const { userMiddleware, checkLoggedIn } = require('../../utils/middleware')

router.use(userMiddleware)

router.get('/', (req, res) => {
    res.send({ hello: true })
})

router.get('/protected', checkLoggedIn, (req, res) => {
    console.log('USER', req.user)
    res.send({ success: true })
})

router.get("/userprogress", checkLoggedIn, (req, res) => {
    User.findById(req.user._id).then(user => {
        console.log("We found user!", user)
        res.send(user)
    })
})

router.post("/userprogress", checkLoggedIn, (req, res) => {

    let progress;
    User.findById(req.user._id).then(user => {
        if (user.progress == 1) {
            let blockchain = new Chainblock();
            // console.log(blocklearn.chain);
            console.log('logging Block stuff', blockchain.chain[0].index)
            let block = new Block({index: blockchain.chain[0].index, timestamp: blockchain.chain[0].timestamp,
            data: blockchain.chain[0].data}).save().then(block=>{
                
                new Blockchain({genesisBlock: block._id}).save()
                
            })
        }
        

        progress = user.progress + 1
        User.findByIdAndUpdate(req.user._id, {
            progress: progress
        }, { new: true }).then(user => {
            res.send(user)
        })

    })


})

class Box {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
     calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}
 class Chainblock {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
     createGenesisBlock() {
        return new Box (0, "01/01/2018", "Genesis block", "0");
    }
     getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
     addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
     isChainvalid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
             // checking (recalculating) the hash to test if it is in fact the correct block
             if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            
            // checking if the current block is pointing to the previous block
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
         return true;
    }
}


router.post("/blockchain")

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
