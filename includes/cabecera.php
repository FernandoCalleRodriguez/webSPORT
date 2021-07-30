 <link rel="shortcut icon" href="img/logo3.png" />

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>SPORT ADMINISTRATION</title>

    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400">   <!-- Google web font "Open Sans", https://fonts.google.com/ -->
    <link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">           <!-- Font Awesome, http://fontawesome.io/ -->
    <link rel="stylesheet" href="css/bootstrap.min.css">                                 <!-- Bootstrap style, http://v4-alpha.getbootstrap.com/ -->
    <link rel="stylesheet" href="css/magnific-popup.css">                                <!-- Magnific pop up style, http://dimsemenov.com/plugins/magnific-popup/ -->
    <link rel="stylesheet" href="css/main.css">                              <!-- Templatemo style -->

     <!--<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-auth.js"></script>-->
     <!--<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-database.js"></script>-->
    <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>

      <!-- Add additional services that you want to use -->

    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAD4AE73wOFnbN1JpvV1dY7FUofAjKocUI",
        authDomain: "sport-administration.firebaseapp.com",
        databaseURL: "https://sport-administration.firebaseio.com",
        projectId: "sport-administration",
        storageBucket: "sport-administration.appspot.com",
        messagingSenderId: "419662862868"
      };
      firebase.initializeApp(config);

      //Comprobar si el usuario está aunticado
      var pagina = location.href;
      pagina = pagina.substring(pagina.length - 9);
      if(pagina != "index.php?fallo=true"){

      }else if(pagina != "index.php"){
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
              location.href ='index.php';
            }
        });
      }else {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              location.href ='inicio.php';
            }
        });
      }
      
    </script>
    <script src="js/funciones.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/database.js"></script>

</head>