var http = require('http');
const { clearScreenDown } = require('readline');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>ini adalah paragraph pertama</h1>');
    res.end();
}).listen(1234);

console.log(`server berjalan pada port 1234 `);