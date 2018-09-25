const express = require('express')
const router = express.Router()

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

router.get("/userProgress", checkLoggedIn, (req, res)=>{
    User.findById(req.user.id).then(user=>{
        res.send({user.progress})
    })
})

router.post("/userProgress", checkLoggedIn, (req, res)=>{
    
    let newProgress = req.user.progress++
    User.findByIdandUpdate(req.user.id, {
        progress: newProgress
    }).then(user=>{
        res.send({user.progress})
    })
})


router.post("/blockchain")

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
