//require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./models/models')
const port = 3000;
// const Routes = require('./routes')

app.use(express.json());
//app.use('/qa', Routes);
app.get('/questions/:product_id', (req, res) => {
  db.getQuestions(req.params.product_id).then((results) => {
    res.send({product_id: req.params.product_id, 'results': results.rows});
  })
})

app.post('/questions/answers', (req, res) => {
  db.postQuestion(req.body).then(() => {
    console.log('successful')
    res.send(200);
  })
})

app.patch('/questions/:question_id/helpful', (req, res) => {
  db.markHelpful(req.params.question_id).then((results) => {
    console.log('successful');
    res.send(results.rows)
  })
});

app.patch('/questions/:question_id/report', (req, res) => {
  db.reportQuestion(req.params.question_id).then(() => {
    console.log('successful');
    res.send(204)
  })
})



app.listen(port, () => {
  console.log(`Listenting on port ${port}`)
});