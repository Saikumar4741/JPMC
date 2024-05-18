const express = require('express')
const studentModel = require('../model/student.model')
const routers = express.Router()
routers.use(express.urlencoded({extended:true}))
const {update,del}=require('../studentController/studentController')

    routers.post('/', async (req, res) => {
        const student = await studentModel.create
            ({
                _id: 3,
                name: "K.Sai Kumar",
                phone: 6302804883,
                email: "ksaikum123@gmail.com"
            })
        res.json(student)
    })
   //get
    routers.get('/all',async (req,res)=>
    {
        const students=await studentModel.find({})
        res.status(200).json(students)
    })
    routers.get("/:id",async (req,res)=>
    {
        const id=req.params.id
        const student=await studentModel.findById(id)
        res.json(student)
        if(!student) res.json({message:'student not exist'})
    })
    //put
    routers.put('/:id',update)
    //delete
    routers.delete('/:id',del)
module.exports = routers