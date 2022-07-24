const express = require('express');

const app = express();

// The normal way
// const {readFile,readFileSync} = require('fs');

// app.get('/',(request,response) => {
//     readFile('./home.html','utf-8',(err,html) => {

//         if(err){
//             response.status(500).send("Sorry, Out of order");
//         }

//         response.send(html);

//     })
// })

// The promises way
const {readFile} = require('fs').promises;

app.get('/',async (request,response) => {
    response.send(await readFile('./home.html','utf-8'))
});
app.use('/favicon.ico', express.static('./download.jpg'));

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));