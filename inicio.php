<!DOCTYPE html>
<html lang="en">

    <?php
        include("includes/cabecera.php");
    ?>
    <body onload="Estadisticas()">
        <div class="container-fluid">
            <?php
                include("includes/menu.php");//onload="TablaUsuarios()
            ?>
            <div class="tm-main-content">
                <h4 id="reservas"> El número de reservas de hoy es: </h4>
                <br>
                <h4 id="usuarios"> El número de usuarios registrados es: </h4>
                <br>
                <h4 id="pistas"> El número de pistas disponibles es: </h4>

            </div> 
        </div>           
    </div> 
    </body>
</html>