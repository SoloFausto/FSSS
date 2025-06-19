const express = require('express')
var compression = require('compression')

const app = express();
const port = process.env.PORT
app.use(express.static('public'))
app.use(compression({ level: 9 }))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
