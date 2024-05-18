require('dotenv').config()
const express=require('express')
const app=express()
const port=process.env.PORT
const mongoose=require('mongoose')
const studentRoutes=require('../routes/student.route')
app.use(express.json())
app.use(studentRoutes)
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/testJP')
app.listen(port,()=>
{
    console.log(`server listening at port ${port}`)
})