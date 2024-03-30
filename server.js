const handlebars = require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {style: 'home.css'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})