<!DOCTYPE html>
<html lang="en">
    <?php
        include("includes/cabecera.php");
        if(isset($_GET["eliminar"])){
          include("sendemail.php");//Mando a llamar la funcion que se encarga de enviar el correo electronico
          
          /*Configuracion de variables para enviar el correo*/
          $mail_username="ferky19@gmail.com";//Correo electronico saliente ejemplo: tucorreo@gmail.com
          $mail_userpassword="Alvarito22";//Tu contraseña de gmail
          $mail_addAddress="ferky_27@hotmail.com";//correo electronico que recibira el mensaje
          $template="email_template.html";//Ruta de la plantilla HTML para enviar nuestro mensaje
          
          /*Inicio captura de datos enviados por $_POST para enviar el correo */
          $txt_message=$_GET["eliminar"];

          
          sendemail($mail_username,$mail_userpassword,$mail_addAddress,$txt_message,$template);//Enviar el mensaje
        }
    ?>
    <body onload="TablaUsuarios()">
        <div class="container-fluid">
            <?php
                include("includes/menu.php");//onload="TablaUsuarios()
            ?>
            <div class="tm-main-content">
                <button type="button" onclick="window.location.assign('CrearUsuario.php')">Crear nuevo usuario encargado</button>
                <table id="myTable" >
                    <tr>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Nº telefono</th>
                      <th>Abrir</th>
                      <th>Borrar</th>
                    </tr>
                </table>
            </div> 
        </div>           
    </div> 
    </body>
</html>