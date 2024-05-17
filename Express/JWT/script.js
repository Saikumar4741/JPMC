const jwt = require('jsonwebtoken')
const express=require('express')
const app=express()
app.use(express.json())
app.post('/login', (req, res) => {
    const user =
    {
        username: req.body.name,
        pass: req.body.pass
    }
    jwt.sign({ user }, "secret key", (err, token) => {
        res.json({ token })
    })
})
function verifyToken(req, res, next) {
    token=req.headers.authorization.split(' ')[1]
    req.token=token
    next()
}
app.post('/profile', verifyToken,(req, res) => {
    token=req.token
    jwt.verify(token,"secret key",(err,data)=>{
        if(err){
            res.send("Invalid Token")
        }
        else{
            res.json(data)
        }
    })
    res.json({ message: "Profile accesed" })
})
app.listen(1234,()=>{
    console.log('server listening on port:1234')
})

