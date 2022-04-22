require('dotenv').config();
const { Pool } = require('pg');
const PORT = 3000;

const pool = new Pool(
  user: 'chrispadovan',
  host: 'localhost',
  database: 'qa',
);

function getQuestions() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM Questions', (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};

function postQuestion(); {

}

function postAnswer(); {

}

function markHelpful(); {

}

function reportQuestion(); {

}

function markAnswerHelpful(); {

}

function reportAnswer(); {

}

module.exports = {
  getQuestions,
  postQuestion,
  postAnswer,
  markHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer
}