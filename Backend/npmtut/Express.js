const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// // for serving static files
// app.use('/static', express.static('static'));

// // set the template engine as pug
// app.set('view engine', 'pug');

// // set the views directory
// app.set('views', path.join(__dirname, 'views'));

// app.get('/demo',(req,res)=>{
//     res.render('demo', { title: 'Pug Engine', message: 'Hello there, this is pug engine' })
// });

app.get("/",(req,res)=>{
    res.send("This is home page of our website")
});

app.get("/about",(req,res)=>{
    res.send("This is about page of our website")
});

app.get("/services",(req,res)=>{
    res.send("This is services page of our website")
});

app.get("/contact",(req,res)=>{
    res.send("This is contact page of our website")
});

app.listen(port, ()=>{
    console.log(`Our app is listening on http://127.0.0.1:${port}`)
});