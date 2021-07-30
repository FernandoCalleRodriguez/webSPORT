// Accedo al servicio de la base de datos
var database = firebase.database();

var IdPista = "";

/***************
TABLA
***************/
//acceso a todos los usuario y poner en tabla
function TablaUsuarios(){
  var i = 0;
  var refRespuestas = database.ref('Usuarios');
  refRespuestas.on('child_added', function(ss) {
    var usuario = ss.val();
    console.log(usuario);
      console.log("prueba");
  
      var y = document.createElement("TR");
      y.setAttribute("id", "myTr"+i);
      document.getElementById("myTable").appendChild(y);
  
      var w = document.createElement("TD");
      var t = document.createTextNode(usuario.nombre);
      w.appendChild(t);
      var z = document.createElement("TD");
      var t = document.createTextNode(usuario.apellido);
      z.appendChild(t);
      var x = document.createElement("TD");
      var t = document.createTextNode(usuario.telefono);
      x.appendChild(t);
      //Botón visualizar
      var r = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","location.href = 'usuario.php?var1='+id;");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/abrir_elemento.png");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      r.appendChild(t);
      //Botón borrar
      var s = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","BorrarUsuario(id,'Usuarios')");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/borrar_elemento.jpg");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      s.appendChild(t);
      
      document.getElementById("myTr"+i).appendChild(w);
      document.getElementById("myTr"+i).appendChild(z);
      document.getElementById("myTr"+i).appendChild(x);
      document.getElementById("myTr"+i).appendChild(r);
      document.getElementById("myTr"+i).appendChild(s);
  
      i++;
  
      //respuesta.respuesta
  });
}

//acceso a todos las pistas y poner en tabla
function TablaTipos(){
  var i = 0;
  var refRespuestas = database.ref('Tipos');
  refRespuestas.on('child_added', function(ss) {
    var pista = ss.val();

      var y = document.createElement("TR");
      y.setAttribute("id", "myTr"+i);
      document.getElementById("myTable").appendChild(y);
  
      var w = document.createElement("TD");
      var t = document.createTextNode(pista.nombre);
      w.appendChild(t);
      var z = document.createElement("TD");
      var t = document.createTextNode(pista.descripcion);
      z.appendChild(t);
      //Botón visualizar
      var r = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","location.href = 'TipoPista.php?var1='+id;");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/abrir_elemento.png");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      r.appendChild(t);
      //Botón borrar
      var s = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","BorrarEnFirebase(id,'Tipos')");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/borrar_elemento.jpg");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      s.appendChild(t);

      document.getElementById("myTr"+i).appendChild(w);
      document.getElementById("myTr"+i).appendChild(z);
      document.getElementById("myTr"+i).appendChild(r);
      document.getElementById("myTr"+i).appendChild(s);

  
      i++;
  
      //respuesta.respuesta
  });
}


//acceso a todos las pistas y poner en tabla
function TablaPistas(){
  var i = 0;
  var refRespuestas = database.ref('Pistas');
  refRespuestas.on('child_added', function(ss) {
    var pista = ss.val();
    console.log(pista);
  
      var y = document.createElement("TR");
      y.setAttribute("id", "myTr"+i);
      document.getElementById("myTable").appendChild(y);
  
      var w = document.createElement("TD");
      var t = document.createTextNode(pista.nombre);
      w.appendChild(t);
      var z = document.createElement("TD");
      z.setAttribute("id","TipoPista");
      ObtenerTipoPista(z,pista.tipo);
      /*var t = document.createTextNode(ObtenerTipoPista(pista.tipo));*/
      //z.appendChild(t);
      var x = document.createElement("TD");
      var t = document.createTextNode(pista.precio);
      x.appendChild(t);
      //Botón visualizar
      var r = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","location.href = 'pista.php?var1='+id;");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/abrir_elemento.png");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      r.appendChild(t);
      //Botón borrar
      var s = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","BorrarEnFirebase(id,'Pistas')");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/borrar_elemento.jpg");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      s.appendChild(t);


      
      document.getElementById("myTr"+i).appendChild(w);
      document.getElementById("myTr"+i).appendChild(z);
      document.getElementById("myTr"+i).appendChild(x);
      document.getElementById("myTr"+i).appendChild(r);
      document.getElementById("myTr"+i).appendChild(s);

      i++;
  
      //respuesta.respuesta
  });
}
//acceso a todos las pistas y poner en tabla
function TablaHorarios(primera){
  i = 0;
  if(primera ==true){
    Pistas();
  }

  var refRespuestas = database.ref('Horarios');
  refRespuestas.on('child_added', function(ss) {
    var horario = ss.val();
    console.log(horario);

    var pista       =getId("myPistas").value;
    if(pista == horario.pista){

      var y = document.createElement("TR");
      y.setAttribute("id", "myTr"+i);
      document.getElementById("myTable").appendChild(y);
  
      var w = document.createElement("TD");
      var t = document.createTextNode(horario.titulo);
      w.appendChild(t);
      var z = document.createElement("TD");
      z.setAttribute("id","Pista");
      ObtenerPista(z,horario.pista);
      /*var t = document.createTextNode(ObtenerTipoPista(pista.tipo));*/
      //z.appendChild(t);
      var x = document.createElement("TD");
      var t = document.createTextNode(horario.fechainicio);
      x.appendChild(t);
      var n = document.createElement("TD");
      var t = document.createTextNode(horario.fechafin);
      n.appendChild(t);
      //Botón visualizar
      var r = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","location.href = 'horario.php?var1='+id;");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/abrir_elemento.png");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      r.appendChild(t);
      //Botón borrar
      var s = document.createElement("TD");
      var t = document.createElement("img");
      t.setAttribute("onclick","BorrarEnFirebase(id,'Horarios')");
      t.setAttribute("id", ss.key);
      t.setAttribute("src","img/borrar_elemento.jpg");
      t.setAttribute("width","50px");
      t.setAttribute("height","50px");
      s.appendChild(t);


      
      document.getElementById("myTr"+i).appendChild(w);
      document.getElementById("myTr"+i).appendChild(z);
      document.getElementById("myTr"+i).appendChild(x);
      document.getElementById("myTr"+i).appendChild(n);
      document.getElementById("myTr"+i).appendChild(r);
      document.getElementById("myTr"+i).appendChild(s);

      i++;
  }
      //respuesta.respuesta
  });
}

function Recargar(){
 rows = document.getElementById("myTable").rows.length;
  for(i =1; i < rows;i++){
      document.getElementById("myTable").deleteRow(1);

  }
  TablaHorarios(false);
}
/***************
VISUALIZAR
***************/

//Mostrar toda la información de un elemento de tipo tipo de pista
function VisualizarUsuario(IdUsuario){

    var refRespuestas = database.ref("/Usuarios/" + IdUsuario).once('value').then(function(ss){
        var Tipopista = ss.val();
        console.log(Tipopista);

        getId("nombre").value       = Tipopista.nombre;
        getId("apellido").value     = Tipopista.apellido;
        getId("telefono").value     = Tipopista.telefono;


    });
}

//Mostrar toda la información de un elemento de tipo tipo de pista
function VisualizarTipoPista(IdTipoPista){

    var refRespuestas = database.ref("/Tipos/" + IdTipoPista).once('value').then(function(ss){
        var Tipopista = ss.val();
        console.log(Tipopista);

        getId("nombre").value       = Tipopista.nombre;
        getId("descripcion").value  = Tipopista.descripcion;

    });
}

//Mostrar toda la información de un elemento de tipo pista
function VisualizarPista(IdPista){

    var refRespuestas = database.ref("/Pistas/" + IdPista).once('value').then(function(ss){
        var pista = ss.val();
        console.log(pista);

        getId("nombre").value       = pista.nombre;
        getId("precio").value       = pista.precio;
        //getId("myTipos").value      = pista.tipo;
        ObtenerTipoPista("myTipos",pista.tipo);
        getId("duracion").value     = pista.duracion;
        getId("localizacion").value = pista.localizacion; 

    });
}

//Mostrar toda la información de un elemento de tipo pista
function VisualizarHorario(IdHorario){

    var refRespuestas = database.ref("/Horarios/" + IdHorario).once('value').then(function(ss){
        var horario = ss.val();
        console.log(horario);

      var year = horario.fechafin.substring(0, 4);
      var month = horario.fechafin.substring(4, 6);
      var day = horario.fechafin.substring(6, 8);
      horario.fechafin = year + '-' + month + '-' + day;

      var year = horario.fechainicio.substring(0, 4);
      var month = horario.fechainicio.substring(4, 6);
      var day = horario.fechainicio.substring(6, 8);
      horario.fechainicio = year + '-' + month + '-' + day;

        getId("nombre").value       = horario.titulo;
        getId("especial").value     = DiccionarioSINO(horario.especial);
        //getId("myTipos").value      = pista.tipo;
        //ObtenerTipoPista("myTipos",pista.tipo);
        getId("fechafin").value     = horario.fechafin;
        getId("fechainicio").value  = horario.fechainicio; 
        getId("findesemana").value  = DiccionarioSINO(horario.findesemana); 
        getId("horainicio").value   = horario.horainicio; 
        ObtenerPista("myPistas",horario.pista);
        getId("slots").value        = horario.slots; 




    });
}


/***************
CREAR
***************/

//Registra un encargado en la BBDD
function CrearEncargado (){
  var email     = getId("email").value;
  var password  = getId("contrasena").value;
  var nombre    = getId("nombre").value;
  var apellido  = getId("apellido").value;
  var telefono  = getId("telefono").value;
  var tipo      = 2;

  var objResultado = {
    nombre: nombre,
    apellido: apellido,    
    telefono: telefono,
    tipo: tipo,

  };

var auth = firebase.auth();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result) {
            console.log('Encargado registrado');
            var user = firebase.auth().currentUser;
            var uid;
              if (user != null) {
                uid = user.uid;
                console.log(uid);
                var refResultados = database.ref("Usuarios/" + uid);
                refResultados.set(objResultado);
                    window.location.assign('usuarios.php')

              }else {
                // No user is signed in.
              }
        }).catch(function(error) {
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          console.log(errorMessage);
      });

  //location.href ='usuarios.php';
}

function ComprobarNombre(){
  var nombre      = getId("nombre").value;
  var refRespuestas = database.ref("Tipos");
  refRespuestas.orderByChild("nombre").equalTo(nombre).once('value', function(ss) {
    var tipo =ss.val();
    console.log(tipo);
      if (tipo != null) {
        alert("tipo ya existente");
      }else{
        //CrearTipo();
        alert("tipo ya existente");
      }
  });

}
//crear un tipo de pista en la BBDD
function CrearTipo(){
  /*var user = auth.currentUser;
  if(!user) {
    mensajeFeedback('Haz login para crear una pista');
    return false;
  }*/

  var nombre      = getId("nombre").value;
  var descripcion = getId("descripcion").value;

  var objResultado = {
    nombre: nombre,
    descripcion: descripcion,
  };
  console.log(objResultado);
  CrearEnFirebase(objResultado,"Tipos");

  /*var refRespuestas = database.ref("Tipos");
  refRespuestas.orderByChild("nombre").equalTo(nombre).once('value', function(ss) {
    var tipo =ss.val();
      if (tipo != null) {
        alert("Tipo de pista ya creada");
      }else{
        alert("Tipo creado");

      }
  });*/

}

//crear un pista en la BBDD
function CrearPista(){
  var user = auth.currentUser;
  /*if(!user) {
    mensajeFeedback('Haz login para crear una pista');
    return false;
  }*/
  var duracion      =getId("duracion").value;
  var nombre        =getId("nombre").value;
  var precio        =getId("precio").value;
  var tipo          =getId("myTipos").value;
  var localizacion  =getId("localizacion").value;

  //TODO: Comprobar si existe otra pista con el mismo nombre 

  var objResultado = {
    precio: precio,
    duracion: duracion,
    tipo: tipo,
    nombre: nombre,
    localizacion:localizacion,
  };
  console.log(objResultado);
  CrearEnFirebase(objResultado,"Pistas")
}

//crear un pista en la BBDD
function CrearHorario(){
  var user = auth.currentUser;
  /*if(!user) {
    mensajeFeedback('Haz login para crear una pista');
    return false;
  }*/
  var especial    =DiccionarioSINO(getId("especial").value);
  var fechafin    =getId("fechafin").value;
  var titulo      =getId("nombre").value;
  var fechainicio =getId("fechainicio").value;
  var findesemana =DiccionarioSINO(getId("findesemana").value);
  var horainicio  =getId("horainicio").value;
  var slots       =getId("slots").value;
  var pista       =getId("myPistas").value;
 
  fechainicio = fechainicio.split("/").reverse().join("");
  fechafin = fechafin.split("/").reverse().join("");

  fechafin = fechafin.replace("-","");
  fechafin = fechafin.replace("-","");
  fechainicio = fechainicio.replace("-","");
  fechainicio = fechainicio.replace("-","");

  var objResultado = {
    especial: especial,
    fechafin: fechafin,
    titulo: titulo,
    fechainicio: fechainicio,
    findesemana:findesemana,
    horainicio:horainicio,
    slots:slots,
    pista:pista,

  };
  console.log(objResultado);
  CrearEnFirebase(objResultado,"Horarios")
}
//Crear un elemento en la base de datos
function CrearEnFirebase(objeto,tipo){

  var refResultados = database.ref(tipo);
  refResultados.push(objeto);
  if(tipo == "Tipos"){
    window.location.assign('Tipospista.php');
  }else if(tipo == "Pistas"){
    window.location.assign('pistas.php')

  }else if(tipo == "Usuarios"){
        window.location.assign('usuarios.php')

  }else if(tipo == "Horarios"){
        window.location.assign('horarios.php')

  }
}

/***************
BORRAR
***************/

function BorrarUsuario(id,tipo){
      var refRespuestas = database.ref(tipo);
      refRespuestas.child(id).remove(); 
      window.location.assign("usuarios.php?eliminar="+id);


}
//Borrar un elemneto de la base de datos
function BorrarEnFirebase(id,tipo){

    console.log(tipo);
  
    //Avisar del borrado en cascada
    var refRespuestas = database.ref(tipo);
    var respuesta = false;
  
    if(tipo == "Tipos"){
      respuesta = confirm("Ademas, se borraran las pistas y horarios de este tipo.Pulse aceptar para eliminar");
      if(respuesta){
        BorrarHerencia(id,"Pistas");
        setTimeout(function(){location.reload();},1000);
      }
  
    }else if(tipo == "Pistas"){
      respuesta = confirm("Ademas, se borraran los horarios de esta pista.Pulse aceptar para eliminar");
      if(respuesta){
        BorrarHerencia(id,"Horarios");
        setTimeout(function(){location.reload();},1000);
      }
    }else{
      location.reload();
    }
  
    refRespuestas.child(id).remove(); 
    //location.reload();
}



function BorrarHerencia(id,tipo){

  console.log(tipo);
  console.log(id);

  var campo;
  if(tipo == "Pistas"){
   campo = "tipo";
  }else if(tipo == "Horarios"){
    campo = "pista";
  }

  var refRespuestas = database.ref(tipo);
  refRespuestas.orderByChild(campo).equalTo(id).on('child_added', function(ss) {
    var pista = ss.val();
      if (pista) {
          console.log(pista);
          if(tipo == "Pistas"){
            BorrarHerencia(ss.key,"Horarios");
          }
          refRespuestas.child(ss.key).remove(); 

      }
  });

}


/***************
MODIFICAR
***************/

//Modificar unelemento de la base de datos
function ModificarTipoPista(IdTipoPista){

  var nombre      = getId("nombre").value;
  var descripcion = getId("descripcion").value;
  var objResultado = {
    nombre: nombre,
    descripcion: descripcion,
  };
    var refResultados = database.ref("/Tipos/" + IdTipoPista);
    refResultados.update(objResultado);
    location.href ='Tipospista.php';
}

function ModificarPista(IdPista){

  var nombre        = getId("nombre").value;
  var precio        = getId("precio").value;
  var myTipos       = getId("myTipos").value;
  var duracion      = getId("duracion").value;
  var localizacion  = getId("localizacion").value;

  var objResultado = {
    nombre: nombre,
    precio: precio,
    myTipos: myTipos,
    duracion: duracion,
    localizacion: localizacion,

  };
    var refResultados = database.ref("/Pistas/" + IdPista);
    refResultados.update(objResultado);
    location.href ='pistas.php';
}

function ModificarHorario(IdHorario){

  var titulo        = getId("nombre").value;
  var especial      = DiccionarioSINO(getId("especial").value);
  var fechainicio   = getId("fechainicio").value;
  var fechafin      = getId("fechafin").value;
  var findesemana   = DiccionarioSINO(getId("findesemana").value);
  var horainicio    = getId("horainicio").value;
  var slots         = getId("slots").value;

  fechafin = fechafin.replace("-","");
  fechafin = fechafin.replace("-","");
  fechainicio = fechainicio.replace("-","");
  fechainicio = fechainicio.replace("-","");

  var objResultado = {
    titulo: titulo,
    especial: especial,
    fechainicio: fechainicio,
    fechafin: fechafin,
    findesemana: findesemana,
    slots: slots,
    horainicio:horainicio,
  };

    var refResultados = database.ref("/Horarios/" + IdHorario);
    refResultados.update(objResultado);
    location.href ='horarios.php';
}

function ModificarUsuario(IdHorario){

  var nombre    = getId("nombre").value;
  var apellido  = getId("apellido").value;
  var telefono  = getId("telefono").value;
  var tipo      = 2;

  var objResultado = {
    nombre: nombre,
    apellido: apellido,    
    telefono: telefono,
    tipo: tipo,

  };


    var refResultados = database.ref("/Usuarios/" + IdHorario);
    refResultados.update(objResultado);
}
/***************
OTROS
***************/

function Tipos(){
  var i = 0;
  var refRespuestas = database.ref('Tipos');
  refRespuestas.on('child_added', function(ss) {
    var pista = ss.val();
    console.log(pista);

      var y = document.createElement("option");
      y.value = ss.key;
      var t = document.createTextNode(pista.nombre);
      y.appendChild(t);
      document.getElementById("myTipos").appendChild(y);
  
      //respuesta.respuesta
  });
}

function ObtenerTipoPista(z,IdTipoPista){
  var result ;
  console.log(z);
  var refRespuestas = database.ref("/Tipos/" + IdTipoPista).once('value').then(
       function(ss){
        var Tipopista = ss.val();
        console.log(Tipopista.nombre); 
        if (z == "myTipos"){
          getId("myTipos").value      = Tipopista.nombre;

        }else{
                  getId("TipoPista").value = Tipopista.nombre;
        var t = document.createTextNode(Tipopista.nombre);
        z.appendChild(t);  
        }

      }
    );
}

function Pistas(){
  var i = 0;
  var refRespuestas = database.ref('Pistas');
  refRespuestas.on('child_added', function(ss) {
    var pista = ss.val();
    console.log(pista);

      var y = document.createElement("option");
      y.value = ss.key;
      var t = document.createTextNode(pista.nombre);
      y.appendChild(t);
      document.getElementById("myPistas").appendChild(y);
  
      //respuesta.respuesta
  });
}

function ObtenerPista(z,IdPista){
  var result ;
  console.log(IdPista);
  var refRespuestas = database.ref("/Pistas/" + IdPista).once('value').then(
       function(ss){
        var Pista = ss.val();
        console.log(Pista.nombre); 
        if (z == "myPistas"){
          getId("myPistas").value      = Pista.nombre;

        }else{
                  getId("Pista").value = Pista.nombre;
        var t = document.createTextNode(Pista.nombre);
        z.appendChild(t);  
        }

      }
    );
}

function DiccionarioSINO(traducir){

  if(traducir == "SI" || traducir =="si" || traducir =="Si"|| traducir =="sI"){
    traducir = 1;
  }else if(traducir == "NO" || traducir =="no"|| traducir =="No"|| traducir =="nO"){
      traducir = 0;
  }else if(traducir == 1){
    traducir = "SI";
  }else if(traducir == 0){
    traducir = "NO";
  }
  return traducir;
}

function Estadisticas(){
  var refRespuestas = database.ref('Reservas');
  var f = new Date();
  var mes;
  if((f.getMonth()+1) < 10){
       mes = "0"+""+(f.getMonth()+1);
  }else{
       mes = (f.getMonth()+1);

  }

  var fecha = f.getFullYear()+""+ mes +""+ f.getDate();
  console.log(fecha);

  refRespuestas.orderByChild("fecha").equalTo(f.getFullYear()+(f.getMonth() +1) +f.getDate()).once('value', function(ss) {

    var cantidad = ss.numChildren();
    document.getElementById("reservas").innerHTML = " El número de reservas de hoy es: "+cantidad;
  });

  var refRespuestas = database.ref('Usuarios');
  refRespuestas.on('child_added', function(ss) {

    var cantidad = ss.numChildren();
    document.getElementById("usuarios").innerHTML = " El número de usuarios registrados es: "+cantidad;
  });

    var refRespuestas = database.ref('Pistas');
  refRespuestas.on('child_added', function(ss) {

    var cantidad = ss.numChildren();
    document.getElementById("pistas").innerHTML = " El número de pistas disponibles es: "+cantidad;
  });
}



// testando real time
/*refResultados.on('child_added', function(ss) {
  var respuesta = ss.val();
  var elem = document.createElement('article');
  elem.innerHTML = '<b>' + respuesta.user + ' <span>dice:</span> </b>' + '<i>' + respuesta.respuesta + '</i>';
  preppend(elem);
});*/
//acceso a una colección
/*var refRespuestas = database.ref('respuestas');
refRespuestas.on('child_added', function(ss) {
  var respuesta = ss.val();
  var item = document.createElement('li');
  item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.respuesta + '"> ' + respuesta.respuesta;  
  getId('lista').appendChild(item);
});*/
