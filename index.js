const express = require('express');

const app = express();

app.listen(3000, () => console.log(`App available on http://localhost:3000`));

app.get('/',(req,res) => {
    const {readFile,readFileSync} = require('fs');

    readFile('./index.html','utf-8',(err,html) => {

        if(err){
            response.status(500).send(err);
        }

        response.send(html);

    })

})