-- \copy Questions FROM '../databases/questions.csv' WITH (FORMAT CSV, HEADER);

-- \copy Chars FROM './characteristics.csv' WITH (FORMAT CSV, HEADER);

COPY Questions
FROM '/Users/chrispadovan/Desktop/Hack Reactor/SDC/OMD2202-sdc-atelier-QA-API/databases/questions.csv'
DELIMITER ','
CSV HEADER;

COPY Answers
FROM '/Users/chrispadovan/Desktop/Hack Reactor/SDC/OMD2202-sdc-atelier-QA-API/databases/answers.csv'
DELIMITER ','
CSV HEADER;

COPY AnswerPhotos
FROM '/Users/chrispadovan/Desktop/Hack Reactor/SDC/OMD2202-sdc-atelier-QA-API/databases/answers_photos.csv'
DELIMITER ','
CSV HEADER;