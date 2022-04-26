// import http from 'k6/http';
// const db = require('./models/models.js');
// export const options = {
//   vus: 10,
//   duration: '30s',
// };
// export default function () {
//   http.get('http://test.k6.io');
//   db.getQuestions((Math.random() * (1000 - 1) + 1));
// }

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '60s',
};

export default function () {
  var random  = (Math.floor((Math.random() * (10000 - 1) + 1)));
   http.get(`http://localhost:3000/questions/${random}`);
  //http.get(`http://localhost:3000/questions/76/`);
  sleep(1);
}