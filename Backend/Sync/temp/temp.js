const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{

    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(home);
});


server.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}/`);
})