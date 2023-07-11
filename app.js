const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const tools = require('./main')
// handlebar
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  let option = req.body
  let password = tools.generatePassword(option)
  res.render('index', { option: option, password: password })
})



// Listen
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
