CREATE DATABASE historialtweets;
USE historialtweets;
DROP TABLE IF EXISTS `tweets`;
CREATE TABLE `tweets` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
LOCK TABLES `tweets` WRITE;
UNLOCK TABLES;