-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Questions'
--
-- ---

DROP TABLE IF EXISTS Questions;

CREATE TABLE Questions (
  id SERIAL UNIQUE NOT NULL,
  product_id INTEGER NULL DEFAULT NULL,
  body VARCHAR(255) NOT NULL,
  date_written VARCHAR(255) NOT NULL,
  asker_name VARCHAR(255) NULL DEFAULT NULL,
  asker_email VARCHAR(255) NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  helpful INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS Answers;

CREATE TABLE Answers (
  id SERIAL UNIQUE NOT NULL,
  question_id INTEGER NULL DEFAULT NULL,
  body VARCHAR(255) NULL DEFAULT NULL,
  date_written VARCHAR(255) NULL DEFAULT NULL,
  answerer_name VARCHAR(255) NULL DEFAULT NULL,
  answerer_email VARCHAR(255) NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  helpful INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'AnswerPhotos'
--
-- ---

DROP TABLE IF EXISTS AnswerPhotos;

CREATE TABLE AnswerPhotos (
  id SERIAL UNIQUE NOT NULL,
  answer_id INTEGER NULL DEFAULT NULL,
  url VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Answers ADD FOREIGN KEY (question_id) REFERENCES Questions (id);
ALTER TABLE AnswerPhotos ADD FOREIGN KEY (answer_id) REFERENCES Answers (id);
-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `AnswerPhotos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Questions` (`id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`) VALUES
-- ('','','','','','');
-- INSERT INTO `Answers` (`id`,`question_id`,`body`,`date`,`answerer_name`,`helpfulness`) VALUES
-- ('','','','','','');
-- INSERT INTO `AnswerPhotos` (`id`, `answer_id`, `url`) VALUES
-- ('', '', '');