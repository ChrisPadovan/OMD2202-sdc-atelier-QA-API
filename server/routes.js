const Routers = require('express').Router();

Routers.get('/questions', getQuestions);
// Routers.get('/questions/:question_id/answers', getAnswers);
Routers.post('/questions', postQuestion);
Routers.post('/questions/:question_id/answers', postAnswer);
Routers.put('/questions/:question_id/helpful', markHelpful);
Routers.put('/questions/:question_id/report', reportQuestion);
Routers.put('/answers/:answer_id/helpful', markAnswerHelpful);
Routers.put('/answers/:answer_id/report', reportAnswer);


module.exports = Routers;