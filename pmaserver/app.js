const express = require('express')
const app = express()
const port = 1005

app.get('/marketData', (req, res) => {
  const dummyData = new Array(500).fill().map((a,i) => {
    return ({
      id: i,
      current: Math.floor(Math.random() * (10000 - 100) + 100) / 100,
      open: Math.floor(Math.random() * (10000 - 100) + 100) / 100,
      high: Math.floor(Math.random() * (10000 - 100) + 100) / 100,
      low: Math.floor(Math.random() * 200) + 1,
      peRatio: Math.floor(Math.random() * 200) + 1
    });
  })
  res.send(dummyData);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})