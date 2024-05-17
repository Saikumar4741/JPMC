const express = require('express')
const app = express();
const fs = require('fs')
const employees = [
    { id: 1, name: "sai", branch: "cse" },
    { id: 2, name: "kumar", branch: "cs" }
]
const students = [
    { id: 1, name: "sai", branch: "aiml" }
]

app.get('/', (req, res) => {
    res.status(200).send("Done")
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/abc.json");
})

app.get('/index2', (req, res) => {
    let ans = fs.readFileSync('abc.json')
    let users = JSON.parse(ans);
    res.json(users)
})

app.get('/api/employees', (req, res) => {
    res.json(employees)
})

app.get('/profile/:id', function (req, res) {
    res.send("you are requesting the profile" + req.params.id);
})

app.get('/api/students', (req, res) => {
    res.json(students)
})

app.post('/api/students1', (req, res) => {
    const student = { id: 1, name: "mno", branch: "ece" }
    students.push(student)
    res.json(students)
})

app.post('/add/:id/:name/:branch', (req, res) => {
    let newStudent =
    {
        "id": req.params.id,
        "name": req.params.name,
        "branch": req.params.branch
    }
    students.push(newStudent)
    res.send(newStudent)
})

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) res.status(404).send(`student with the given ${req.params.id} does not exist`)
    const index = students.indexOf(student.id)
    students.splice(index, 1)
    res.json(student)
})
app.patch('/api/employees/:id', (req, res) => {
   const data=fs.readFileSync("abc.json")
   const abc=JSON.parse(data)
   const id=req.params.id
   
});
//stream
app.get('/stream',(req,res)=>
{
   let readStream=fs.createReadStream('./abc.json')
   let writeStream=fs.createWriteStream('./xyz.json')
   readStream.on('data',function(chunk)
{
    writeStream.write(chunk)
})
res.send("sent")
})
//pipe
app.get('/pipe',(req,res)=>
    {
       let readStream=fs.createReadStream('./abc.json').pipe(res)
    })
app.listen(3000)
