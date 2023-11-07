// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/test', (req, res) => {
//     res.send('This is a test')
// })
// app.listen(port, () => {
//     console.log(`Example app listening
// at http://localhost:${port}`)
// })

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'index.html');
    res.sendFile(htmlFilePath);
});

app.get('/test', (req, res) => {
    res.send('TEEEEEEEEEEEEEEEST');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

