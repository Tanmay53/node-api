var http = require('http');

var server = http.createServer( function( request, response ) {
    switch(request.url) {
        case "/":
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('This is Home Page.')
            response.end();
        break;
        case "/student":
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<html><body><p>This is Student Page.</p></body></html>')
            response.end();
        break;
        default:
            response.end("Invalid Request!");
    }
});

server.listen(5000);

console.log("Server Started on http://127.0.0.1:5000");