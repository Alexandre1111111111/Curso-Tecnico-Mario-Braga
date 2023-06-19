<?php

$host="localhost";
$port=3306;
$socket="/var/run/mysqld/mysqld.sock";
$user="root";
$password="Alexandre11122007Alews";
$dbname="dbsql";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

$query = "-- Active: 1686703178162@@127.0.0.1@3306@dbsql ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Alexandre11122007Alews'; create database if not exists DBsql; use DBsql; create table if not exists contas( id_codigo smallint auto_increment primary key, email varchar(50) not null, senha varchar(20) not null  )";


if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($field1, $field2);
    while ($stmt->fetch()) {
        //printf("%s, %s\n", $field1, $field2);
    }
    $stmt->close();
}
?>