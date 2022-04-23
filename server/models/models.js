//require('dotenv').config();
const { Pool } = require('pg');
const PORT = 3000;

const pool = new Pool({
  user: 'chrispadovan',
  host: 'localhost',
  database: 'qa',
});

function getQuestions() {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT Questions.*,
        json_object_agg(Answers.id,
          json_build_object('id', Answers.id, 'body', Answers.body, 'date', Answers.date_written, 'name', Answers.answerer_name, 'helpfulness', Answers.helpful, 'photos', COALESCE((SELECT json_agg(AnswerPhotos.url)  FROM AnswerPhotos where Answers.id = AnswerPhotos.answer_id), '[]'))
          ) as answers
      FROM Questions
      INNER JOIN Answers on Questions.id = Answers.question_id
      LEFT JOIN AnswerPhotos on AnswerPhotos.answer_id = Answers.id
      where Questions.product_id = 1
      group by Questions.id`, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        resolve(res);
      }
    });
  });
};


function postQuestion() {

}

function postAnswer() {

}

function markHelpful() {

}

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