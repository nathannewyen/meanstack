//import statements
const http = require('http');
const fs = require('fs');


const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            }); // send data about response
            response.write(contents); //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else if (request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/960x0.jpg") {
        fs.readFile("images/960x0.jpg", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/car.jpeg") {
        fs.readFile("images/car.jpeg", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat.jpeg") {
        fs.readFile("images/cat.jpeg", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpg"
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat1.jpeg") {
        fs.readFile("images/cat1.jpeg", function (errors, contents) {
            response.writeHead(200, {
                "Content-Type": "image/jpg"
            });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 6789");