<!DOCTYPE html>
<html lang="en">
    <?php
       include("includes/cabecera.php");
     ?>
<header>    
      <title>SPORT ADMINISTRATION</title>
</header>
<body class="body-background">
  <body>
    <div class="login-page">
      <div id="login" class="form">
        <h1>Login</h1> 
        <input id="username" name="username" required="required" type="email" placeholder="Tu nombre de usuario"/>
        <input id="password" name="password" required="required" type="password" placeholder="Tu password" /> 
        <button onclick="Inicio()">Click me</button>
                <?php
              if(isset($_GET["fallo"]) && $_GET["fallo"] == 'true'){
                  echo "<div style='color:red'>Usuario o contraseña invalido </div>";
              }
        ?>
      </div>
    </div>
  </body>
</html>