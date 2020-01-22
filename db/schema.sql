### 
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE BURGERS
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- vs code throws an error. This is how I've worked around it.
-- this page explains more.
-- https://stackoverflow.com/questions/15049434/sql-create-statement-incorrect-syntax-near-auto-increment