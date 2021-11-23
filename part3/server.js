const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/plain'})
    response.end('Hello Universe')
})


const PORT = 3001
app.listen(PORT)
console.log(`Server runnin on port ${PORT}`)

//Use npm start in bash to start the server
//Server will be running on port 3001 (localhost:3001)
