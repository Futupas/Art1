'use strict';

let fs = require('fs');

// file is included here:
eval(fs.readFileSync('tools.js')+'');



const express = require('express');
const PORT = process.env.PORT || 5000;

express()
.use(express.static('static'))
.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki');
})
.get('/a', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki a ' + f);
})
.get('/b', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki b');
})
.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
} );
