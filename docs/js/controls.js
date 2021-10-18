function validar() {
  //console.log("prueba javascrip");

  // recuperando id del firmulario
  var user = document.getElementById("inputUser").value;
  var pass = document.getElementById("inputPassword").value;
  var form = document.getElementById("formulario");

  if (user != "admin" || pass != "123456") {
    // mensaje error de usuario
    alert("Usuario o password incorrecto, vuelva a intentar");
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  } else {
    // saltar a la pagina web admin
    location.href = "/docs/admin.html";
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  }
  return false;
}
// validando resgistro de usuarios

function registrar() {
  //console.log("prueba javascrip");

  // recuperando id del firmulario
  var reg = document.getElementById("registar");
  var name = document.getElementById("inputName1").value;
  var fname = document.getElementById("inputFirstName1").value;
  var gen = document.getElementById("inputGenero1").value;
  var direc = document.getElementById("inputAddress1").value;
  var mail = document.getElementById("inputEmail1").value;
  var pass = document.getElementById("inputPassword1").value;

  console.log(name);

  /*
  if (user != "admin" || pass != "123456") {
    // mensaje error de usuario
    alert("Usuario o password incorrecto, vuelva a intentar");
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  } else {
    alert("Registro realizado con exito... Gracias")
    // saltar a la pagina web admin
    location.href = "/docs/index.html";
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  }
  return false;*/
}
