-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Question'
--
-- ---

DROP TABLE IF EXISTS `Question`;

CREATE TABLE `Question` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `question_body` VARCHAR(255) NULL DEFAULT NULL,
  `question_date` VARCHAR(255) NULL DEFAULT NULL,
  `asker_name` VARCHAR(255) NULL DEFAULT NULL,
  `question_helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` BINARY NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `question_id` INTEGER NULL DEFAULT NULL,
  `body` VARCHAR(255) NULL DEFAULT NULL,
  `date` VARCHAR(255) NULL DEFAULT NULL,
  `answerer_name` VARCHAR(255) NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Questions'
--
-- ---

DROP TABLE IF EXISTS `Questions`;

CREATE TABLE `Questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Question` ADD FOREIGN KEY (id) REFERENCES `Questions` (`id`);
ALTER TABLE `answers` ADD FOREIGN KEY (question_id) REFERENCES `Question` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Question` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Question` (`id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`) VALUES
-- ('','','','','','');
-- INSERT INTO `answers` (`id`,`question_id`,`body`,`date`,`answerer_name`,`helpfulness`) VALUES
-- ('','','','','','');
-- INSERT INTO `Questions` (`id`) VALUES
-- ('');