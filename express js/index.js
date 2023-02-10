const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, "public")))

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})

app.get('/about', (req,res) =>{
    // res.send("hi im about")
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
    res.json({"maani" : 23})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})