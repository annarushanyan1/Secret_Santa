const express = require('express');

const Santajs = require('./helpers/santaRandom')

const app = express();

var spawn = require("child_process").spawn;

app.use(express.json({ limit: '1mb' }));

app.listen(8000);

app.post(
    '/api/santa', function (req, res) {
        let sendingData = Santajs.SantaRandom(req.body)
        const child = spawn('python3', ['script.py', JSON.stringify(sendingData)]);
        child.stdout.on('data', (data) => {
            console.log(data.toString());
        });
    }
)

