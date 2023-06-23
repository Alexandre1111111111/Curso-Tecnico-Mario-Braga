<?php

$host='localhost';
$user='root';
$password='Alexandre11122007Alews';
$database='dbsql';

$mysqli = new mysqli($host, $user, $password, $database);
if($mysqli->error){
    die("Erro de Conexão" . $mysqli->error);
}
?>