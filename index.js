'use strict';

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
    res.end('Prozhektor perestroiki a ');
})
.get('/b', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki b');
})
.get('/screen', (req, res) => {
    res.writeHead(200, {'Content-Type': 'image/png'});

    // var webshot = require('webshot');
    // var fs      = require('fs');

    // var renderStream = webshot('google.com');
    // // var file = fs.createWriteStream('google.png', {encoding: 'binary'});

    // renderStream.on('data', function(data) {
    //     console.log(data.toString('binary'));
    //     res.end( data.toString('binary'));
    // });


    var webshot = require('webshot');

    webshot('<html><body>Hello World</body></html>', 'static/hello_world.png', {siteType:'html'}, function(err) {
    // screenshot now saved to hello_world.png
    res.end('Prozhektor perestroiki ');
    });



    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Prozhektor perestroiki ');
})
.get('/bfff', (req, res) => {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
    let document = dom.window.document;

    let svg = document.createElement('svg');
    svg.style.width = '500px';
    svg.style.height = '500px';
    svg.innerHTML = '<line x1="5" y1="5" x2="100" y2="200" style="stroke: red; stroke-width: 3px;" />';


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki '+document.body.outerHTML);
})
.get('/bdddd', (req, res) => {
    // const svg = fs.readFile(input, 'utf8');
    // const canvas = preset.createCanvas(800, 600);
    // const ctx = canvas.getContext('2d');
    // const v = Canvg.fromString(ctx, svg, preset);

    // // Render only first frame, ignoring animations.
    // v.render();

    // const png = canvas.toBuffer();

    // fs.writeFile(output, png);


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki b');

})
.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
} );
