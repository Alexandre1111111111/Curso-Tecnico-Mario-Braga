<?php

if (!isset($_SESSION)) {
    session_start();
}
if (!isset($_SESSION['codigo'])) {
    die("Acesso Negado porque você não está logado.<p><a href=\"index.php\">Entrar</a></p> ");
}
?>
