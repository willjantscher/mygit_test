// node express.js to run
// node express.js   to install express


const express = require('express')
const app = express()
const port = 3008

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/', (req, res) => {
    res.send("Got a POST request")
})

app.put('/user', (req, res) => {
    res.send("Got a PUT request at /user")
})

app.delete('/user', (req, res) => {
    res.send("Got a DELETE request at /user")
})







