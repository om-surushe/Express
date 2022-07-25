const express = require('express');
const app  = express();

app.listen(process.env.PORT ||3000);

app.set('view engine','ejs');

// app.use(express.static("public"));
app.use(express.urlencoded({extended:true})) // we use this to access data from forms

// in here we can pass any number of functions and since here logger is passed we can run the logger specifically for this route
app.get('/',logger,(req,res) => {
    // res.send("Hi");
    // res.status(500).send("Hello");
    // res.json({message:"Hey there"});
    // res.download("index.js");
    res.render('index.ejs',{name:"Om Surushe"});
});

app.use(logger)
// everything is top to bottom and this logger middleware will only work for things below it and not above
// if you want to use it every where place it at the top

const userRouter = require('./routes/users')

// this logger here is a middleware
function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

app.use('/users',userRouter);

module.exports = app