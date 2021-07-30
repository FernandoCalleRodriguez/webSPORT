function getId(id) {
  return document.getElementById(id);
}

function preppend(elem) {
  var resultados = getId('resultados');
  resultados.insertBefore(elem, resultados.childNodes[2]);
  getId('sinrespuestas').style.display = 'none';
}

function getRadioValue(name) {
  // http://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
  var radios = document.getElementsByName(name);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        return radios[i].value;
    }
  }
  return false;
}

function validateDecimal(valor) {
    var RE = /^\d*(\.\d{1})?\d{0,1}$/;
    if (RE.test(valor)) {
        return true;
    } else {
      return false;
      }
}


/*function validarVacio(evObject) {
  var todoCorrecto = true;

  if (evObject == null || evObject == 0 || /^\s*$/.test(evObject)){
      alert (evObject+ ' no puede estar vacío o contener sólo espacios en blanco');
      todoCorrecto=false;
  }
  
  return todoCorrecto
}*/