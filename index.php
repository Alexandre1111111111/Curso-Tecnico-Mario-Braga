<?php

if(!isset($_SESSION)) {
    session_start();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso Técnico Mário Braga</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style class="stylesheet"></style>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="Icon" href="https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-logotipo-da-escola-online.png">
    <script src="Cadastro.js"></script>
</head>
<div class="Cabeçalho">
    <header>
        <button type="button" id="Cad" class="Cadastrar"><a style="text-decoration: none;" href="Cadastro.php">Cadastrar-se</a></button> <button type="button" id="Cad" class="Seguir"><a style="text-decoration: none;" href="Siga.php">Entrar</a></button> <img class="Mais" src="https://cdn-icons-png.flaticon.com/512/6631/6631481.png" alt="opções">
    </header>
</div>
<body>
    <nav>
    <div class="Icon">
        <img src="https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-logotipo-da-escola-online.png" alt="Logo">
    </div>
    </nav>
    <div class="Título">
        <h1>Curso Técnico Mário Braga</h1>
    </div>
    <article>
        <div class="Introdução">
            <p>O colégio Mário Braga disponibiliza algumas diciplinas para o desenvolvimento técnico dos alunos</p>
        </div>
    </article>
    <nav>
    <div class="Continuações">
    <a class="a" href="Matérias.html">Diciplinas</a> 
    <a class="b" href="Curso.html">Curso</a> 
    <a class="c" href="Escola.html">Colégio</a> 
    <a class="d" href="Sobre.html">Sobre</a>
    </div>
    </nav>
    <div class="Pé">
        <footer>
            <img class="Logofoot" src="https://images.vexels.com/media/users/3/224233/isolated/lists/d5ee0e9c87bb54cf867d7fb89c4570b8-logotipo-da-educacao-online.png" alt="LogoPé">
            <h2>Todos os direitos reservados ao colégio Mário Braga©</h2>
        </footer>
    </div>
</body>
</html>
