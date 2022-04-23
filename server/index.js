//require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./models/models')
const port = 3000;
// const Routes = require('./routes')

app.use(express.json());
//app.use('/qa', Routes);
app.get('/questions', (req, res) => {
  db.getQuestions().then((results) => {
    console.log(results.rows)
    res.send({product_id: 5, 'results': results.rows});
  })
})

app.listen(port, () => {
  console.log(`Listenting on port ${port}`)
});