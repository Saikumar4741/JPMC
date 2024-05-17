const http = require('http');
const fs = require('fs');
const students = [
    { id: 1, name: "cvr", loc: "hyd" },
    { id: 2, name: "jpmc", loc: "kurnool" }
];
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello Mittu");
    } 
    else if (req.url === '/students') {    
        //res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students));
    }
     else if (req.url === '/index.html') {   
        fs.readFile("./index.html", (err, data) => {
            if (err) {          
               // res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
            } else {             
                //res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } 
    else {     
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
});
server.listen(1000, () => {
    console.log('Server is running on port 1000');
});