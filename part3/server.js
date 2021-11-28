//const http = require('http')
//ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän moduulin. 
//Kyse on käytännössä samasta asiasta kuin mihin olemme selainpuolen koodissa tottuneet (import http from 'http'),
// mutta syntaksiltaan hieman erilaisessa muodossa.

//const http = require('http')
const express = require('express')
const app = express()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2021-11-25T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "browser can execute only JavaScript",
        date: "2021-11-25T18:39:31.091Z",
        important: false

    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2021-11-25T18:20:14.098Z",
        important: true
    }
]

app.get('/',(req, res)=>{
    res.send('<h1>Hello  Universe<h1>')
})

app.get('/api/notes', (req, res)=> {
    res.json(notes)
})
//const app = http.createServer((request, response) => {
    //response.writeHead(200, {'content-type': 'application/json'})
    //response.end(JSON.stringify(notes))})


const PORT = 3001
app.listen(PORT)
console.log(`Server runnin on port ${PORT}`)

//Use npm start in bash to start the server
//Server will be running on port 3001 (localhost:3001)
