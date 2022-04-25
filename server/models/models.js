//require('dotenv').config();
const { Pool } = require('pg');
const PORT = 3000;

const pool = new Pool({
  user: 'chrispadovan',
  host: 'localhost',
  database: 'qa',
});

function getQuestions(id) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT Questions.*,
        json_object_agg(Answers.id,
          json_build_object('id', Answers.id, 'body', Answers.body, 'date', Answers.date_written, 'name', Answers.answerer_name, 'helpfulness', Answers.helpful, 'photos', COALESCE((SELECT json_agg(AnswerPhotos.url)  FROM AnswerPhotos where Answers.id = AnswerPhotos.answer_id), '[]'))
          ) as answers
      FROM Questions
      INNER JOIN Answers on Questions.id = Answers.question_id
      where Questions.product_id = ${id}
      group by Questions.id`, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};


function postQuestion(input) {
  return new Promise((resolve, reject) => {
    pool.query(`Insert into Questions(product_id,body, date_written, asker_name, asker_email)
    Values (input.product_id, input.body, input.date, input.name, input.email);`,
    (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};

function postAnswer(input) {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO Answers(question_id, body, date_written, answerer_name, answerer_email)
    VALUES (input.question_id, input.body, input.date, input.name, input.email);`, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};

function markHelpful(input) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE Questions
    SET reported = true
    WHERE input.id = Questions.id;`, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};

function reportQuestion() {

}

function markAnswerHelpful() {

}

function reportAnswer() {

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