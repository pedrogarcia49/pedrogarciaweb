const express = require("express")
const colors = require("colors")
const path = require('path')
const app = express()

app.listen(3000)

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})


app.use(express.static(path.join(__dirname, '..', 'public')))

console.log('Server listening'.bgMagenta)