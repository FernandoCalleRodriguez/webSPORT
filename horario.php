<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
      $var = $_GET['var1'];
  ?>
  <script languaje="javascript">    
    VisualizarHorario('<?php echo $var; ?>');
  </script> 
  <body>
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
          <fieldset>
            <legend>Horario:</legend>
            <form onsubmit="ModificarHorario('<?php echo $var; ?>')" action="horarios.php">

              Nombre:
              <input id="nombre"        type="text" required  maxlength="20"/><br>
              Especial:
              <input id="especial"      type="text" required pattern="SI|si|Si|sI|NO|no|No|nO"/><br>
              Fecha inicio:
              <input id="fechainicio"   type="date" required/><br>
              Fecha fin:
              <input id="fechafin"      type="date" required/><br>
              Fin de semana:
              <input id="findesemana"   type="text" required pattern="SI|si|Si|sI|NO|no|No|nO"/><br>
              Pista:
              <input id="myPistas"      type="text" required readonly/><br>
              Hora de inicio:
              <input id="horainicio"    type="time" required/><br>
              Nº de slots:
              <input id="slots"         type="number"required/><br>
  
              <button >Modificar</button>
            </form>
            <br><button onclick="location.href ='horarios.php'";>Cancelar</button>

          </fieldset>
    </div>            
    </div>
  </body>
</html>