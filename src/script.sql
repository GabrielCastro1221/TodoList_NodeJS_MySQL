CREATE DATABASE TODOLIST
    DEFAULT CHARACTER SET = "utf8mb4";

USE TODOLIST;

DEFAULT CHARACTER SET = "utf8mb4";

CREATE TABLE TASKS (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR(100),
    DESCRIPTION VARCHAR(255)
) DEFAULT CHARSET UTF8 COMMENT "Esta tabla contiene las tareas";