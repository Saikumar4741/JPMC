const http=require('http')
var fs=require('fs');
students=[{id:1,name:"cvr",loc:"hyd"},{id:2,name:"jpmc",loc:"kurnool"}]
const server=http.createServer((req,res)=>
{
    console.log(req.url)
    if(req.url==='/')
        {
            res.write("hello");
            res.end();
        }
        else if(req.url==='/students')
            {
                res.write(JSON.stringify(students))
                res.end()
            }
           else if(req.url=='/index.html')
                {
                    let html1=fs.readFileSync("./index.html")
                    res.write(html1);
                    res.end();
                }
                else
                {
                    res.write("error");
                    res.end();
                }
})
server.listen(1000);