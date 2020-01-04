CREATE DATABASE historialtweets;
USE historialtweets;
DROP TABLE IF EXISTS `tweets`;
CREATE TABLE `tweets` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
);
LOCK TABLES `tweets` WRITE;
UNLOCK TABLES;