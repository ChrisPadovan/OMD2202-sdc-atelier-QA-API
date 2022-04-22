require('dotenv').config();
const express = require('express', 4.17.3);
const app = express();
const path = require('path');
const port = 3000;
const Routes = require('./routes')

app.use(express.json());
app.use('/qa', Routes);

app.listen(port, () => {
  console.log(`Listenting on port ${port}`)
});