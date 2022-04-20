const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let questionsSchema = mongoose.Schema({
  question_id: { type: Number, required: true },
  question_body: { type: String, required: true },
  asker_name: {type: String, required: true},
  question_helpfulness: { type: Number, required: true },
  reported: { type: Boolean, required: true },
  answers: {type: Array, required: true},
});

let Questions = mongoose.model('Questions', questionsSchema);

let answerSchema = mongoose.Schema({
  answer_id: { type: Number, required: true },
  question_id: {type: Number, required: true},
  body: {type: String, required: true},
  date: {type: String, required: true},
  answerer_name: {type: String, required: true},
  helpfulness: {type: Number, required: true},
  photos: {type: Array, required: true}
});

let Answers = mongoose.model('Answers', answerSchema);

module.exports.save = save;