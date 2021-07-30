<!DOCTYPE html>
<html lang="en">
  <?php
      include("includes/cabecera.php");
  ?>
  <body onload="Pistas()">
    <div class="container-fluid">
      <?php
        include("includes/menu.php");
      ?>
      <div class="tm-main-content-create">
        <form onsubmit="CrearHorario()" action="horarios.php">
          Nombre: <input id="nombre"        type="text"       placeholder="Nombre del horario"      maxlength="20"      required/><br>
          Especial: <input id="especial"    type="text"       placeholder=" SI o No" pattern="SI|si|Si|sI|NO|no|No|nO"  required/><br>
          Fecha de inicio: <input id="fechainicio"type="date" placeholder="Fecha de inicio del horario (yyyy/mm/dd)"    required/><br>
          Fecha de fin: <input id="fechafin"      type="date" placeholder="Fecha de fin del horario (yyyy/mm/dd)"       required/><br>
          Fin de semana<input id="findesemana"   type="text" placeholder=" Si o No" pattern="SI|si|Si|sI|NO|no|No|nO"  required/><b>
          <select id="myPistas" >
          </select> </b><br>
          Hora de inicio:<input id="horainicio"    type="time" placeholder="Hora apertura de las pistas (hh:mm)" required/><br>
          Nº Slots:<input id="slots"         type="number" placeholder="Numero de slots de duración" required/><br>
          <button >Crear</button>
        </form>
      </div>            
    </div>            
    </div>
  </body>
</html>