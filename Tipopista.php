<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
      $var = $_GET['var1'];
  ?>
  <script languaje="javascript">    
    VisualizarTipoPista('<?php echo $var; ?>');
  </script> 
  <body >
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
          <fieldset>
            <legend>Tipo de Pista:</legend>
            <form onsubmit="ModificarTipoPista('<?php echo $var; ?>')" action='Tipospista.php'>
            Nombre:
            <input id="nombre"      maxlength="20"  type="text" required/><br>
            Descripción:
            <input id="descripcion" maxlength="40"  type="text" required/><br>
            <button >Modificar</button>
            </form><br>
            <button onclick="location.href ='Tipospista.php'";>Cancelar</button>
          </fieldset>
      </div>                  
 
    </div>            
    </div>
  </body>
</html>