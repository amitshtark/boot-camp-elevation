const http = require('http')

const server = http.createServer(function (request, response) {
    let text;
    let code;
    console.log(request.method, request.url)
    if(request.method === "GET")
    {
        code = 200;
        if(request.url === "/")
            text = "Welcome to my server!"
        else if(request.url === "/about")
            text = "This is the about page"
        else if(request.url === "/contact")
            text = "name: amit, number: 3"
        else
        {
            code = 404;
            text = "404 - Page not found"
        }
    }
    else
    {
        code = 404;
        text = "404 - Page not found"

    }
    response.writeHead(code, { 'Content-Type': 'text/plain' })
    response.write(text)
    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
