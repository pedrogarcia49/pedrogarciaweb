const express = require("express")
const colors = require("colors")
const path = require('path')
const app = express()

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`.bgMagenta)
})

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})


app.use(express.static(path.join(__dirname, '..', 'public')))