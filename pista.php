<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
      $var = $_GET['var1'];
  ?>
  <script languaje="javascript">    
    VisualizarPista('<?php echo $var; ?>');
  </script> 
  <body>
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
          <fieldset>
            <legend>Pista:</legend>
            <form onsubmit="ModificarPista('<?php echo $var; ?>')" action="pistas.php">

            Nombre:
            <input id="nombre"        type="text" maxlength="20"  required/><br>
            Precio
            <input id="precio"        type="number"   step="any"  required/><br>
            Tipo de pista:
            <input id="myTipos"       type="text"     readonly    required/><br>
            Duracion:
            <input id="duracion"      type="number"               required/><br>
            Localización:
            <input id="localizacion"  type="text" required/><br>
                          
            <button >Modificar</button>
            </form><br>
            <button onclick="location.href ='pistas.php'";>Cancelar</button>

          </fieldset>
    </div>            
    </div>
  </body>
</html>