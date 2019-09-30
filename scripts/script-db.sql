CREATE DATABASE historialtweets;
USE historialtweets;
CREATE TABLE tweets (
    id INT NOT NULL AUTO_INCREMENT,
    busqueda VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
);