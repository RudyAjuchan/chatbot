const express = require('express')
const app = express()

app.use(express.json());

app.get('/webhook', function (req, res) {
    console.log("req ->", req.body);
    res.send('Hello World')
})

app.listen(3000, ()=> {
    console.log("servidor montado en el puerto 3000")
})