const express = require('express')
const app = express()
const port = 3000
let booklog = {}

app.use(express.json())

app.post('/booklog', (req, res) => {
  booklog = req.body
  if (booklog.name && booklog.text) {
    res.json({
      "ok": true,
      "booklog": booklog
    })
  } else {
    res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }
})

app.get("/booklog", (req, res) => {
  res.json({
    "ok": true,
    "booklog": [
      booklog
    ]
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})