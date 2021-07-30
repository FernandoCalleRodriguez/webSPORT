<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body onload="TablaTipos()">
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content">
                <button type="button" onclick="window.location.assign('CrearTipo.php')">Crear nuevo tipo de pista</button>
                <div class="table-content">
                  <table id="myTable" >
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Abrir</th>
                      <th>Borrar</th>
                    </tr>
                  </table>
                </div>            
      </div>            
 
    </div>            
    </div>
  </body>
</html>