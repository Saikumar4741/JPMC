const express=require('express')
const app=express();
app.get('/',function(req,res)
{
    res.end("THis is the home page")
})
app.get('/contact',function(req,res)
{
    res.send("this is the contact page")
})
console.log("Mittu")
app.listen(3000)