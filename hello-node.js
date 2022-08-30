const express = require('express')
const app = express()

console.log("Connected..");

app.get('/', function (req, res) {
  res.send('Hello World from Express')
})

app.listen(PORT, () => console.log('Server is listening on port ${PORT}... '))



