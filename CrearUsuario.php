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
        <div >
          <input id="email"       type="email"     required   placeholder="Correo electrónico del usuario"/><br>
          <input id="contrasena"  type="password"  required   placeholder="Contraseña del usuario"/><br>
          <input id="nombre"      type="text"      required   placeholder="Nombre del usuario" maxlength="20"/><br>
          <input id="apellido"    type="text"      required   placeholder="Apellido del usuario" maxlength="40" /><br>
          <input id="telefono"    type="number"    required   placeholder="Nº de teléfono del usuario" maxlength="9"/><br>
          <button onclick="CrearEncargado()">Crear</button>
        </div>
      </div>            
 
    </div>            
    </div>
  </body>
</html>