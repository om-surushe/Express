const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000,() => {
    console.log("Running")
});



app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hi Developers</title>
        <link rel="shortcut icon" href="https://www.computerhope.com/jargon/j/javascript.png" type="image/x-icon">
    
        <style>
            body {
                font-family: 'Courier New', Courier, monospace;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
            }
        </style>
    </head>
    
    <body>
        <h1>I am a JavaScript Full Stack Developer now!</h1>
    
        <div style="width: 30%;">
            <div class="tenor-gif-embed" data-postid="18848483" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/family-guy-peter-griffin-happy-dance-gif-18848483">Family Guy Peter Griffin GIF</a>from <a href="https://tenor.com/search/family+guy-gifs">Family Guy GIFs</a></div> 
        </div>
        <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </body>
    
    </html>`)
})


module.exports = app