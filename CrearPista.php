<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body onload="Tipos()">
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
        <form onsubmit="CrearPista()" action="pistas.php">
          Nombre: <input id="nombre"        type="text"                 placeholder="Nombre de la pista"  maxlength="20" required/><br>
          Precio: <input id="precio"        type="number" step="any"    placeholder="Precio de la pista por duración (€)" required/><br>
          Tipo de pista: <br> <select id="myTipos" >
            </select> <br><br>
          Duración: <input id="duracion"          type="number" placeholder="Duración por slot (min)"   required/><br>
          Localización: <input id="localizacion"  type="text"   placeholder="Localización de la pista"  required/><br>  
          <button >Crear</button>
        </form>
      </div>            
 
    </div>            
    </div>
  </body>
</html>