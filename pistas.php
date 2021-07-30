<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body onload="TablaPistas()">
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content">
                <button type="button" onclick="window.location.assign('CrearPista.php')">Crear nueva pista</button>
                <table id="myTable" >
                    <tr>
                      <th>Nombre</th>
                      <th>Tipo de pista</th>
                      <th>Precio</th>
                      <th>Abrir</th>
                      <th>Borrar</th>
                    </tr>
                </table>
      </div>            
 
    </div>            
    </div>
  </body>
</html>