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
  db.getQuestions(500).then((results) => {
    res.send({product_id: 500, 'results': results.rows});
  })
})

app.post('/questions/answers', (req, res) => {
  db.postQuestion(req.body).then(() => {
    console.log('successful')
    res.send(200);
  })
})

app.listen(port, () => {
  console.log(`Listenting on port ${port}`)
});