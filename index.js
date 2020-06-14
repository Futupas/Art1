'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;

const htmlFile = `
<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Art1 by Futupas</title>
    <style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{
    background-color: #000;
}

#mainsvg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background-color: #000;
    z-index: 2;
}


div#main {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 2;
    
}
    </style>
</head>
<body>
    <div id="main">
        <svg id="mainsvg"><line x1="450" y1="250" x2="427.091205130642" y2="157.0553655912463" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="427.091205130642" y1="157.0553655912463" x2="363.6129493462312" y2="85.40322682126873" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="363.6129493462312" y1="85.40322682126873" x2="274.10733605106464" y2="51.458225180389206" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="274.10733605106464" y1="51.458225180389206" x2="179.0790225914929" y2="62.99675146291705" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="179.0790225914929" y1="62.99675146291705" x2="100.29785036577982" y2="117.37546835184091" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="100.29785036577982" y1="117.37546835184091" x2="55.811636514789626" y2="202.13686714248837" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="55.811636514789626" y1="202.13686714248837" x2="55.81163651478957" y2="297.86313285751146" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="55.81163651478957" y1="297.86313285751146" x2="100.29785036577974" y2="382.624531648159" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="100.29785036577974" y1="382.624531648159" x2="179.07902259149282" y2="437.003248537083" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="179.07902259149282" y1="437.003248537083" x2="274.10733605106446" y2="448.54177481961085" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="274.10733605106446" y1="448.54177481961085" x2="363.6129493462311" y2="414.5967731787313" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="363.6129493462311" y1="414.5967731787313" x2="427.0912051306419" y2="342.9446344087538" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="427.0912051306419" y1="342.9446344087538" x2="450" y2="250" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><path d="M250 250 L439.8813264577532 291.053072344002 L63.84899103820405 186.8229675541155 L344.8517880090732 421.71194315443404 L366.9179380589967 275.27810743156704 " style="stroke: rgb(255, 0, 0); stroke-width: 1px; fill: rgb(255, 0, 0);"></path><path d="M366.9179380589967 275.27810743156704 L390.8904817635622 116.19319598342008 L96.4770838509522 124.65533072300212 L300.15491251819475 438.66323208506907 L252.16268176211736 120.18055981964903 " style="stroke: rgb(0, 255, 0); stroke-width: 1px; fill: rgb(0, 255, 0);"></path><path d="M252.16268176211736 120.18055981964903 L242.38728182443108 55.3097370725047 L278.5495379980902 446.8570698404534 L73.83944916595394 167.7877399596992 L253.25170874817482 172.94447102316877 " style="stroke: rgb(0, 0, 255); stroke-width: 1px; fill: rgb(0, 0, 255);"></path><path d="M253.25170874817482 172.94447102316877 L432.275787928158 178.09004486726485 L93.02606275746953 368.7692979469176 L437.74869728479916 200.29451097759886 L390.3463629670113 201.65696575313498 " style="stroke: rgb(255, 255, 0); stroke-width: 1px; fill: rgb(255, 255, 0);"></path><path d="M390.3463629670113 201.65696575313498 L55.8116365147896 211.27228200701117 L443.1988632812986 222.40670364859886 L126.26077274511567 400.5454430256901 L155.21291715382281 208.41525499662964 " style="stroke: rgb(0, 255, 255); stroke-width: 1px; fill: rgb(0, 255, 255);"></path><path d="M155.21291715382281 208.41525499662964 L176.84172659414892 64.88366832200578 L441.16800404340114 285.83281617243244 L89.41225410088464 361.8837608292861 L297.9726387197088 166.13645359465323 " style="stroke: rgb(255, 0, 255); stroke-width: 1px; fill: rgb(255, 0, 255);"></path><path d="M297.9726387197088 166.13645359465323 L372.8642901447142 95.84583187570769 L78.79600579899548 341.65618967676977 L447.40777881396593 239.48294522620995 L115.06882355309813 311.3359042694988 " style="stroke: rgb(255, 255, 255); stroke-width: 1px; fill: rgb(255, 255, 255);"></path><path d="M115.06882355309813 311.3359042694988 L68.20091283036379 321.46892664408557 L332.3509865591394 73.54712820312486 L363.7328098346051 413.3342571338158 L105.03203270099587 286.9005566715771 " style="stroke: rgb(255, 0, 0); stroke-width: 1px; fill: rgb(255, 0, 0);"></path><path d="M105.03203270099587 286.9005566715771 L55.8116365147896 262.8452875031141 L380.31267032671303 104.25331509680774 L168.99353367358216 430.0417381779563 L395.44478793022785 121.33394494418516 L102.80822812505042 285.81372637768726 " style="stroke: rgb(0, 255, 0); stroke-width: 1px; fill: rgb(0, 255, 0);"></path><path d="M102.80822812505042 285.81372637768726 L61.633781339162795 308.9563030007067 L410.57955146005804 138.41756142497238 L214.1435279087853 441.26085031341614 L152.8181801767318 264.39215017056557 " style="stroke: rgb(0, 0, 255); stroke-width: 1px; fill: rgb(0, 0, 255);"></path><path d="M152.8181801767318 264.39215017056557 L101.77350821074293 117.17399138752444 L435.01984701985685 189.22313024030223 L156.90529852897953 421.69783191147224 L251.28434751120005 149.4988092962497 " style="stroke: rgb(255, 255, 0); stroke-width: 1px; fill: rgb(255, 255, 0);"></path><path d="M251.28434751120005 149.4988092962497 L283.97960288162943 55.20228213308113 L138.14560449478293 408.7489500658749 L417.6585555367395 146.40810521335712 L156.21220098109228 364.9499384548959 " style="stroke: rgb(0, 255, 255); stroke-width: 1px; fill: rgb(0, 255, 255);"></path><path d="M156.21220098109228 364.9499384548959 L119.34187864864484 395.7696752549532 L237.16922249794726 55.94332418449778 L424.80267176745815 345.2157796892262 L133.97197922070615 353.5749390351839 " style="stroke: rgb(255, 0, 255); stroke-width: 1px; fill: rgb(255, 0, 255);"></path><path d="M133.97197922070615 353.5749390351839 L85.77845467447187 354.9601344820521 L300.94483844008255 61.63634730137932 L265.3099518106948 447.4735789779769 L322.2351326051384 69.71069083986058 L296.5405598391963 109.32373524151643 " style="stroke: rgb(255, 255, 255); stroke-width: 1px; fill: rgb(255, 255, 255);"></path><path d="M296.5405598391963 109.32373524151643 L113.40056419188903 391.6686819888674 L343.6217476414385 77.82156406639226 L310.6634616444983 434.6778650873671 L170.70709194198145 303.3198291416967 " style="stroke: rgb(255, 0, 0); stroke-width: 1px; fill: rgb(255, 0, 0);"></path><path d="M170.70709194198145 303.3198291416967 L58.151305876592176 197.67899962249055 L442.4185728263215 280.7590591723641 L68.88778715726133 177.22234366864018 " style="stroke: rgb(0, 255, 0); stroke-width: 1px; fill: rgb(0, 255, 0);"></path></svg>
    </div>


</body></html>
`;

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
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // var webshot = require('webshot');
    // var fs      = require('fs');

    // var renderStream = webshot('google.com');
    // // var file = fs.createWriteStream('google.png', {encoding: 'binary'});

    // renderStream.on('data', function(data) {
    //     /*console.log(data.toString('binary'));*/
    //     res.end( data.toString('binary'));
    // });


    var webshot = require('webshot');

    webshot(htmlFile, 'static/file.png', {siteType:'html'}, function(err) {
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
