function validar() {
  //console.log("prueba javascrip");

  // recuperando id del firmulario
  var user = document.getElementById("inputUser1").value;
  var pass = document.getElementById("inputPassword1").value;
  var form = document.getElementById("formulario");

  if (user != "admin" || pass != "123456") {
    // mensaje error de usuario
    alert("Usuario o password incorrecto, vuelva a intentar");
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  } else {
    // saltar a la pagina web admin
    location.href = "admin.html";
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  }
  return false;
}
