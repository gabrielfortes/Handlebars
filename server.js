const handlebars = require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})