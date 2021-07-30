<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
      $var = $_GET['var1'];
  ?>
  <script languaje="javascript">    
    VisualizarUsuario('<?php echo $var; ?>');
  </script> 
  <body>
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
          <fieldset>
            <legend>Usuario:</legend>
            <form onsubmit="ModificarUsuario('<?php echo $var; ?>')" action='usuarios.php'>
            Nombre:
            <input id="nombre"        type="text"  required maxlength="20"/><br>
            Apellido:
            <input id="apellido"      type="text"  required maxlength="40"/><br>
            Nº Telefono:
            <input id="telefono"      type="number"required maxlength="9"/><br>
            <button >Modificar</button>
            </form><br>
            <button onclick="location.href ='usuarios.php'";>Salir</button>




          </fieldset>
    </div>            
    </div>
  </body>
</html>