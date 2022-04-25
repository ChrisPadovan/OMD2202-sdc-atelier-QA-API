const db = require('./models/models');

test('returns an array when called with a product id', () => {
  expect((typeof db.getQuestions(5))).toBe('object')
});

test('returns a product id that matches the input', () => {
  return db.getQuestions(5).then(result => {
    console.log(result);
    expect(result.rows[0].product_id).toBe(5)
  });
});