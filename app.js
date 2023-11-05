const os = require('os');
const path = require('path');
const fs = require('fs');
const http = require('http');

// console.log(fs.readFileSync('./temporfile.txt','utf8'));
// console.log(fs.writeFileSync);
// there is also reaFile async and writeFile async

const server = http.createServer(
    (req,res) => {
        // console.log(req);
        if(req.url === '/') {
            res.end("We're home");
        } 
        if(req.url === '/about') {
            res.end("We're in the about page");
        }
        res.end(`
        <h1>Sorry nothing here</h1>
        <a href='/'>Sorry nothing here</a>
        `);
        // res.write('welcome');
        // res.end();
    }
);

server.listen(5001);


