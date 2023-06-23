<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="Cadastro.css">
    <style class="stylesheet"></style>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="Banco.sql">
    <link rel="Icon" href="https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-logotipo-da-escola-online.png">
    <script src="Cadastro.js"></script>
</head>
<div class="Cabeçalho">
    <header class="Back">
    <a href="index.php"> <img class="Voltar" src="https://cdn-icons-png.flaticon.com/512/2879/2879564.png" alt="Logohead"></a></img>
    </header>
    <header class="Entrar">
    <button><a style="text-decoration: none;" class="Seguir" href="Siga.php">Entrar</a></button>
    </header>

</div>
<body>
<?php
include('Conexao.php');

if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    } else if(strlen($_POST['senha']) == 0) {
        echo "Preencha sua Senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM contas where email='$email' and senha='$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do SQL: " . $mysqli->error); 

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {

            $contas = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) {
                session_start();
            }
        }
    }


}
?>
<h1>Cadastrar</h1>
    <form action="" method="post">
        <h2><label for="email"></label>E-mail</h2>
    <div class="Conta">
        <input type="email" id="email" pattern="+.com" name="email" required size="40" placeholder="Digite o E-mail">
    </div>
        <h2><label for="pass"></label>Senha</h2>
    <div class="Senha">
        <input type="password" id="senha" size="40" name="senha" minlength="4" required maxlength="35" autocomplete="off" placeholder="Digite a Senha">
    </div>
        <h2><label for="passcon"></label>Confirmar Senha</h2>
    <div class="Confirmar">
        <input type="password" id="senha" size="40" minlength="4" required maxlength="35" autocomplete="off" placeholder="Confirme a sua Senha">
    </div>
    <hr class="Linha">
    <div class="Cadastrar">
        <input type="submit" id="envio" name="cadastrar" value="Cadastrar">
    </div>
</form>
</body>
</html>