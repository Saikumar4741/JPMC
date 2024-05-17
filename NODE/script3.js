const http=require('http')
const lib=require('./factorial.js');
const url=require('url');
const students=[{id:1,name:"sai",branch:"cse-cs"},{id:2,name:"kumar",branch:"aiml"}]
const server=http.createServer((req,res)=>
{
    const parse=url.parse(req.url,true);
    const queryParams=parse.query;
    const id=queryParams.id;
    if(req.url.includes('/fact'))
        {
          res.write(JSON.stringify(lib.fact(id)))
          res.end();
        }
})
server.listen(1001)