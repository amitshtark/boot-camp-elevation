const http = require('http')

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
]

function sendJSON(response, statusCode, data) {
    response.writeHead(statusCode, {
        'Content-Type': 'application/json'
    })

    response.end(JSON.stringify(data))
}

const server = http.createServer(function (request, response) {

    if (request.method === "GET" && request.url === "/api/users") {
        sendJSON(response, 200, users)
        return
    }

    if (request.method === "GET" && request.url.startsWith("/api/users/")) {

        const data = request.url.split("/")
        const id = Number(data[3])

        const user = users.find(user => user.id === id)

        if (!user) {
            sendJSON(response, 404, {
                error: "User not found"
            })
            return
        }

        sendJSON(response, 200, user)
        return
    }

    if (request.method === "POST" && request.url === "/api/users") {
        let body = ""

        request.on("data", function(chunk) {
            body += chunk
        })

        request.on("end", function() {
            console.log(body)
            try{
                const newUserData = JSON.parse(body)
                const newUser = {...newUserData, id: users.length + 1}
                users.push(newUser)
                sendJSON(response, 201, newUser);
                
            }
            catch(error){
                sendJSON(response, 400, {
                error: "bad request"
            })
            
            }
        
        })
        return
    }

    sendJSON(response, 404, {
        error: "Page not found"
    })
})

const port = 3000

server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})