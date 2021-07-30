<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body  onload="TablaHorarios(true)" >
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content">
                <button type="button" onclick="window.location.assign('CrearHorario.php')">Crear nuevo horario</button>
                <select id="myPistas" onchange="Recargar()"></select> 
                <table id="myTable" >
                    <tr>
                      <th>Nombre</th>
                      <th>Pista</th>
                      <th>Fecha de inicio</th>
                      <th>Fecha de fin</th>
                      <th>Abrir</th>
                      <th>Borrar</th>
                    </tr>
                </table>
      </div>            
 
    </div>            
    </div>
  </body>
</html>