const express = require('express');
const PORT = process.env.PORT || 5000;

express()
.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Prozhektor perestroiki');
})
.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
} );
