const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 8000;


// public static path 
const staticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);



app.use(express.static(staticPath));



// routing 
app.get("/",(req,res)=>{
    // res.send("welcome page");
    res.render('index');
});


app.get("/about",(req,res)=>{
    // res.send("welcome to about page");
    res.render('about');
});

app.get("/weather",(req,res)=>{
    // res.send("welcome to weather page");
    res.render('weather');
});

app.get("*",(req,res)=>{
    // res.send("404 error page!  OOPS!!");
    res.render('404error');
});

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
});