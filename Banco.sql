-- Active: 1685574299112@@127.0.0.1@3306@sakila
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Alexandre11122007Alews';
create database DBsql;
use DBsql;
create table contas(
codigo int(4) auto_increment,
email varchar(50) not null,
senha varchar(30) not null,
primary key (codigo)
);
