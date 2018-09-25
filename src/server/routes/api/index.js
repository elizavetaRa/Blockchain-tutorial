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

router.get("/userprogress", checkLoggedIn, (req, res) => {
    User.findById(req.user._id).then(user => {
        console.log("We found user!", user)
        res.send(user)
    })
})

router.post("/userprogress", checkLoggedIn, (req, res) => {

    let progress;
    User.findById(req.user._id).then(user => {
        progress = user.progress + 1
        User.findByIdAndUpdate(req.user._id, {
            progress: progress
        }, { new: true }).then(user => {
            res.send(user)
        })

    })


})


router.post("/blockchain")

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
