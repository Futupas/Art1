'use strict';

const express = require('express');
const PORT = process.env.PORT || 5000;

const htmlFile = `
<!DOCTYPE html>
<html lang="en">
<head>
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
    position: fixed;
    top: -100px;
    left: -100px;
    width: 1000px;
    height: 1000px;
    background-color: #000;
    z-index: 2;
}

    </style>
</head>
<body>
    <svg id="mainsvg"><line x1="950" y1="500" x2="898.4552115439444" y2="290.8745725803042" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="898.4552115439444" y1="290.8745725803042" x2="755.6291360290202" y2="129.65726034785462" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="755.6291360290202" y1="129.65726034785462" x2="554.2415061148954" y2="53.28100665587573" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="554.2415061148954" y1="53.28100665587573" x2="340.42780083085904" y2="79.24269079156335" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="340.42780083085904" y1="79.24269079156335" x2="163.1701633230046" y2="201.594803791642" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="163.1701633230046" y1="201.594803791642" x2="63.07618215827665" y2="392.30795107059885" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="63.07618215827665" y1="392.30795107059885" x2="63.07618215827654" y2="607.6920489294008" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="63.07618215827654" y1="607.6920489294008" x2="163.17016332300443" y2="798.4051962083577" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="163.17016332300443" y1="798.4051962083577" x2="340.4278008308588" y2="920.7573092084367" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="340.4278008308588" y1="920.7573092084367" x2="554.2415061148951" y2="946.7189933441243" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="554.2415061148951" y1="946.7189933441243" x2="755.62913602902" y2="870.3427396521454" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="755.62913602902" y1="870.3427396521454" x2="898.4552115439443" y2="709.1254274196962" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><line x1="898.4552115439443" y1="709.1254274196962" x2="950" y2="500" style="stroke: rgb(255, 255, 255); stroke-width: 5px; stroke-linecap: round;"></line><path d="M500 500 L820.9481235935613 796.6128442185924 L149.91149524788506 226.8570851786884 L934.690845727996 437.8883195282415 L683.7416398700915 669.8097804499814 " style="stroke: rgb(255, 0, 0); stroke-width: 1px; fill: rgb(255, 0, 0);"></path><path d="M683.7416398700915 669.8097804499814 L403.8700957660216 928.4605984796358 L63.076182158276595 411.8244748497989 L234.00388222891934 152.70181784395197 L599.9678653176712 70.62272725892853 L939.7859507660136 541.4400267364424 L344.3103458188227 838.1693194736956 " style="stroke: rgb(0, 255, 0); stroke-width: 1px; fill: rgb(0, 255, 0);"></path><path d="M344.3103458188227 838.1693194736956 L272.5696131974697 873.9181842035518 L352.2870439193845 77.8027179762397 L648.3943649207419 911.0115239576144 L344.31552614162547 157.41201464710332 " style="stroke: rgb(0, 0, 255); stroke-width: 1px; fill: rgb(0, 0, 255);"></path><path d="M344.31552614162547 157.41201464710332 L318.7982563244694 94.17248739041952 L914.3640684644952 644.5806576588236 L213.39705908270992 833.074319141706 L152.2487829646921 222.4037555040985 L330.7778692533111 123.86159848131888 " style="stroke: rgb(255, 255, 0); stroke-width: 1px; fill: rgb(255, 255, 0);"></path><path d="M330.7778692533111 123.86159848131888 L431.68996022478217 68.16145840480715 L785.4166330409436 163.280393862383 L868.2444947074996 743.2262773620323 L126.01650170012516 727.6148084289412 L541.5341534185703 97.69913120625739 " style="stroke: rgb(0, 255, 255); stroke-width: 1px; fill: rgb(0, 255, 255);"></path><path d="M541.5341534185703 97.69913120625739 L567.5138164050998 58.31453000701481 L442.5684815295521 933.1594332265438 L530.3832721367608 56.17792074168153 L543.8769656010118 94.14747914910697 " style="stroke: rgb(255, 0, 255); stroke-width: 1px; fill: rgb(255, 0, 255);"></path><path d="M543.8769656010118 94.14747914910697 L801.3729026887348 818.7087009398169 L90.10085917585451 659.1832689632762 L317.8079768326003 94.85602797007698 L645.6818977630699 87.95977293954928 L908.2517740624519 330.62078912891366 L768.0835358581694 725.0366042994089 " style="stroke: rgb(255, 255, 255); stroke-width: 1px; fill: rgb(255, 255, 255);"></path><path d="M768.0835358581694 725.0366042994089 L710.3404178930618 887.5184848913711 L63.076182158276595 530.250012403412 L766.5329480781944 141.9651198568277 L365.7155007859901 697.2969170700608 " style="stroke: rgb(255, 0, 0); stroke-width: 1px; fill: rgb(255, 0, 0);"></path><path d="M365.7155007859901 697.2969170700608 L249.6536257848838 858.1004201803296 L735.2597391919576 121.93216709836611 L621.0841973580425 921.3689043340983 L362.47255042503195 701.7900185165936 " style="stroke: rgb(0, 255, 0); stroke-width: 1px; fill: rgb(0, 255, 0);"></path><path d="M362.47255042503195 701.7900185165936 L63.076182158276595 447.5821290364622 L523.0015107310174 57.074228851240434 L824.3674841044233 207.24681592489003 L941.1569444204121 535.87768682675 L503.3013282841509 940.5337359262207 L324.6108225170654 669.6428351714044 " style="stroke: rgb(0, 0, 255); stroke-width: 1px; fill: rgb(0, 0, 255);"></path><path d="M324.6108225170654 669.6428351714044 L97.90073826315427 325.9553030884621 L902.9283856059005 309.02295315667993 L288.6474070919738 615.1230835097173 " style="stroke: rgb(255, 255, 0); stroke-width: 1px; fill: rgb(255, 255, 0);"></path><path d="M288.6474070919738 615.1230835097173 L112.9315084481654 702.6834367703569 L885.4999960815765 276.25115729212735 L413.88247383453233 929.6763212814853 L287.2421868987209 615.8233136965123 " style="stroke: rgb(0, 255, 255); stroke-width: 1px; fill: rgb(0, 255, 255);"></path><path d="M287.2421868987209 615.8233136965123 L138.82045770777592 247.98929164355275 L722.4793044004887 117.08518751802518 L924.6654539850682 397.2137063211842 L876.5939661361601 733.8016723840036 L295.82837632326846 889.9725492183383 L262.15015371428143 553.6376516776804 " style="stroke: rgb(255, 0, 255); stroke-width: 1px; fill: rgb(255, 0, 255);"></path><path d="M262.15015371428143 553.6376516776804 L222.77906889521228 160.44974706561754 L944.9887504455393 520.3314386647799 " style="stroke: rgb(255, 255, 255); stroke-width: 1px; fill: rgb(255, 255, 255);"></path></svg>


</body>
</html>
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

    var options = {
        windowSize: { width: 800, height: 800 },
        shotSize: { width: 'window', height: 'window' },
        siteType: 'html'
    };


    var webshot = require('webshot');

    webshot(htmlFile, 'static/file.png', options, function(err) {
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
