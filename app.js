const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

// handlebar
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))




// Listen
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});