const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {name: "Nik", id: 3})
})

app.get('/about', (req, res) => {
    res.render('about')
})

const port = 3001

app.listen(port, () => {
    console.log(`Server is run: http://localhost:${port}`);
})