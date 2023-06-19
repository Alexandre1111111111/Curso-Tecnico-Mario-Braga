-- Active: 1686703178162@@127.0.0.1@3306@dbsql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Alexandre11122007Alews';
create database if not exists DBsql;
use DBsql;
create table if not exists contas(
id_codigo smallint auto_increment primary key,
email varchar(50) not null,
senha varchar(20) not null 
);
