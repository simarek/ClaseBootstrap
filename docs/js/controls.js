function validar() {
  //console.log("prueba javascrip");

  // recuperando id del firmulario
  let user = document.getElementById("inputUser").value;
  let pass = document.getElementById("inputPassword").value;
  let form = document.getElementById("formulario");

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
  var pass1 = document.getElementById("inputPassword1").value;

  reg.reset();
  console.log(name);

  if (name != "" || fname != "" || mail != "" || pass1 != "") {
    alert("Registro realizado con exito... Gracias");
    // saltar a la pagina web admin
    location.href = "/docs/index.html";
    //limpiando campos del formulaio, reseteo de datos
    reg.reset();
  } else {
    alert("Llenar los campos requeridos");
    //limpiando campos del formulaio, reseteo de datos
  }
}

function persona(nombre, correo, genero, dia, mes, anio) {
  this.nombre = nombre;
  this.correo = correo;
  this.genero = genero;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
}

let per = new persona(
  "Gato Macato",
  "gato_wawuay@top.com",
  "Masculino",
  12,
  10,
  2000
);
console.log(persona);
var factual = new Date();
// calculando edad de persona
var edad = factual.getFullYear() - per.anio;
console.log(per.nombre, "tiene la edad de ", edad, "años.");
