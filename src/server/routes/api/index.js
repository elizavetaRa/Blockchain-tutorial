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
            let block = new Block({
                index: blockchain.chain[0].index, timestamp: blockchain.chain[0].timestamp,
                data: blockchain.chain[0].data,
                hash: "fj483tug45gji4tjg48vdure"
            }).save().then(block => {

                new Blockchain({ genesisBlock: block._id }).save().then(blockchain => {
                    User.findByIdAndUpdate(req.user._id, { blockchain: blockchain }).populate("blockchain").then(user => {

                        Blockchain.findById(blockchain._id).populate("blocks")
                            .then(blockchain => {
                                Blockchain.findById(blockchain._id).populate("genesisBlock").then(blockchain => {

                                    User.findById(req.user._id).populate("blockchain").then(user => {
                                        res.send(user)
                                    })


                                })

                            }

                            )

                    })
                })

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


router.get("/blockchain", checkLoggedIn, (req, res) => {

    User.findById(req.user._id).then(user => {

        Blockchain.findById(user.blockchain).populate("blocks").then(blockchain => {

            Blockchain.findById(blockchain._id)
            .populate("genesisBlock")
            .populate("blocks")
            .then(blockchain => {
                console.log
                res.send(blockchain)
            })

        })

    })
})

router.post("/addblock", checkLoggedIn, (req, res) => {
    let data = req.body.data

    User.findById(req.user._id).populate("blockchain").then(user => {

        Blockchain.findById(user.blockchain).populate("genesisBlock").then(blockchain => {
            console.log("hhhhhhh", blockchain.genesisBlock)
            if (blockchain.blocks.length == 0) {
                let box = new Box(1, new Date(), data, blockchain.genesisBlock.hash);
                console.log("Hash", box)
                new Block({ index: parseInt(box.index), timestamp: box.timestamp, data: box.data, previousHash: "frdt435t4ver5t45z664", hash: box.hash }).save().then(block => {
                    Blockchain.findByIdAndUpdate(blockchain._id,
                        { $push: { blocks: block._id } }, { new: true })
                        .then(blockchain => {
                            console.log("BLOCKCHAIN ", blockchain)
                            res.send(blockchain)
                        })
                })
            } else if (blockchain.blocks.length == 1){

                let box = new Box(2, new Date(), data, blockchain.blocks[0].hash);

                new Block({ index: parseInt(box.index), timestamp: box.timestamp, data: box.data, previousHash: "frdt435t4ver5t45z664", hash: box.hash }).save().then(block => {
                    Blockchain.findByIdAndUpdate(blockchain._id,
                        { $push: { blocks: block._id } }, { new: true })
                        .then(blockchain => {
                            console.log("BLOCKCHAIN ", blockchain)
                            res.send(blockchain)
                        })
                })

            } else if (blockchain.blocks.length == 2){

                let box = new Box(3, new Date(), data, blockchain.blocks[1].hash);

                new Block({ index: parseInt(box.index), timestamp: box.timestamp, data: box.data, previousHash: "frdt435t4ver5t45z664", hash: box.hash }).save().then(block => {
                    Blockchain.findByIdAndUpdate(blockchain._id,
                        { $push: { blocks: block._id } }, { new: true })
                        .then(blockchain => {
                            console.log("BLOCKCHAIN ", blockchain)
                            res.send(blockchain)
                        })
                })

            }
            else if (blockchain.blocks.length == 3){

                let box = new Box(4, new Date(), data, blockchain.blocks[2].hash);

                new Block({ index: parseInt(box.index), timestamp: box.timestamp, data: box.data, previousHash: "frdt435t4ver5t45z664", hash: box.hash }).save().then(block => {
                    Blockchain.findByIdAndUpdate(blockchain._id,
                        { $push: { blocks: block._id } }, { new: true })
                        .then(blockchain => {
                            console.log("BLOCKCHAIN ", blockchain)
                            res.send(blockchain)
                        })
                })

            }

        })

        //data : data
        // add new Box
        // add all properties from that Box, including data
        // add this Box to the Chainblock
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
        return new Box(0, new Date(), "Genesis block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.index = this.getLatestBlock().index + 1;
        newBlock.timestamp = new Date();
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainvalid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            // checking (recalculating) the hash to test if it is in fact the correct block
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // checking if the current block is pointing to the previous block
            if (currentBlock.previousHash !== previousBlock.hash) {
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
