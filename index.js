'use strict';

// import {
//     promises as fs
// } from 'fs';
// import {
//     DOMParser
// } from 'xmldom';
// import * as canvas from 'canvas';
// import fetch from 'node-fetch';
// import Canvg, {
//     presets
// } from 'canvg';

// const preset = presets.node({
//     DOMParser,
//     canvas,
//     fetch
// });



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
.get('/bfff', (req, res) => {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki '+dom.window.document.querySelector("p").textContent);
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
