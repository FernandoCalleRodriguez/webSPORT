<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body>
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
        <form onsubmit="CrearTipo()" action="Tipospista.php">
          <input id="nombre"      maxlength="20"    type="text" placeholder="Nombre del tipo de pista" required/><br>
          <input id="descripcion" maxlength="40"    type="text" placeholder="Descripción del tipo de pista" required/><br>
          <button>Crear</button>
        </form>
      </div>            
    </div>            
    </div>
  </body>
</html>