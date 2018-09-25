const express = require('express')
const router = express.Router()
const User = require("../../models/User");

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

router.get("/userprogress", checkLoggedIn, (req, res)=>{
    console.log("We are here!")
    User.findById(req.user.id).then(user=>{
        console.log("We found user!")
        let progress = user.progress
        res.send({progress})
    })
})

router.post("/userprogress", checkLoggedIn, (req, res)=>{
    
    let newProgress = req.user.progress++
    User.findByIdAndUpdate(req.user.id, {
        progress: newProgress
    }).then(user=>{
        let progress = user.progress
        res.send({progress})
    })
})


router.post("/blockchain")

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
