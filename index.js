const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000,() => {
    console.log("Running")
});

app.use(express.static('public'))


app.get('/', (req, res) => {

    res.sendStatus(200).sendFile('./public/index.html');
})

app.use('/favicon.ico', express.static('./download.jpg'));

module.exports = app