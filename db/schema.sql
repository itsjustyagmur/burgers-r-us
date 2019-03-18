CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers (
id integer(10) NOT NULL AUTO_INCREMENT,
burger_name varchar(100) null,
devoured boolean, 
PRIMARY KEY(id)
)

