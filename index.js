const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000,() => {
    console.log("Running")
});

app.use(express.static('public'))

const { readFile, readFileSync } = require('fs');

// app.get('/',(request,response) => {
//     readFile('index.html','utf-8',(err,html) => {

//         if(err){
//             response.status(500).send("Sorry, Out of order");
//         }

//         response.send(html);

//     })
// })

app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
})

app.use('/favicon.ico', express.static('./download.jpg'));

// index.js
module.exports = app