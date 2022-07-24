const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('public'))

//index.js
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.use('/favicon.ico', express.static('./download.jpg'));

// index.js
module.exports = app