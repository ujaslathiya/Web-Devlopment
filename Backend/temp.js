const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>float and clear</title>
  
      <style>
          body {
              background: #f2f2f2;
          }
  
          * {
              box-sizing: border-box;
          }
  
          li {
              list-style: none;
              width: auto;
              float: left;
              margin: 10px;
              padding: 5px 30px;
              font-weight: 700;
              font size: 250%;
          }
  
          li a {
              text-decoration: none;
              color: white;
          }
  
          li a:hover {
              color: bisque;
              font-size: 102%;
          }
  
          li a:active {
              font-size: 90%;
          }
  
          /* li:active{
              font-size: 90%;
          } */
  
          .navbar {
              font-size: 110%;
              overflow: auto;
              margin: 5px;
              border: 2px solid black;
              border-radius: 30px;
              border-radius: 10px;
              width: 100%;
              background: rgb(0, 0, 0);
          }
  
          .searchbox input {
              height: 30px;
              border: 2px solid black;
              border-radius: 10px;
          }
  
          .searchbox input:hover {
              border: 2px solid white;
          }
  
          .searchbox {
              margin: 5px 50px;
              padding: 5px 10px;
              float: right;
          }
  
          .search_btn:active {
              font-size: 98%;
          }
  
          .search_btn {
              border-radius: 5px;
              border: 2px solid black;
              background: #f2f2f2;
              padding: 2px 8px;
              border: none;
              background: none;
          }
  
          .search_btn:hover {
              height: 28px;
              background-color: white;
              border-radius: 10px;
          }
      </style>
  
  </head>
  
  <body>
  
  
      <header>
  
          <div class="navbar">
              <nav>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="">Contact us</a></li>
              </nav>
              <div class="searchbox">
                  <input type="text" name="search" id="search" placeholder="Search here....">
                  <button class="search_btn">
                      &#x1F50D;
                  </button>
              </div>
          </div>
  
      </header>
  
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
