

//Login de usuarios
var auth = firebase.auth();

// Accedo al servicio de autenticación
function Inicio() {
    var email=getId("username").value;
    var password=getId("password").value;
    auth.signInWithEmailAndPassword(email,password)
      .then(function(result) {
      var user = firebase.auth().currentUser.uid;
      console.log(user);

      var refRespuestas = database.ref("/Usuarios/" + user).once('value').then(function(ss){
        var usuario = ss.val();
        console.log(usuario.tipo);
        if(usuario.tipo == 1){
         console.log('Sesión iniciada');
         window.location.assign("inicio.php");
        }else{
         window.location.assign("index.php?fallo=true");
        }

      });

      }).catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        window.location.assign("index.php?fallo=true");
      });
  }

/*auth.onAuthStateChanged(function(user) {
  if (user) {
    getId('inicio').style.display = 'none';
    getId('logouticon').style.display = 'block';
  } else {
    getId('inicio').style.display = 'block';
    getId('logouticon').style.display = 'none';
  }
});*/

function CerrarSesion(){
  var auth = firebase.auth();

  auth.signOut()
    .then(function() {
      console.log('Sesión cerrada');
               window.location.assign("index.php")

    });
}
