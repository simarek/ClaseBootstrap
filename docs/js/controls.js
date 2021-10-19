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

//console.log("prueba javascrip");

/*
// recuperando id del formulario y tabla
var reg = document.getElementById("registrar");
var lista = document.getElementById("list_user");

// recuperacion de datos del form registrar

reg.addEventListener("submit", reguser);

function reguser(e) {
  //console.log("estoy dentro de la funcion");
  e.preventDefault();
  var name = document.getElementById("inputName1").value;
  var fname = document.getElementById("inputFirstName1").value;
  var gen = document.getElementById("inputGenero1").value;
  var direc = document.getElementById("inputAddress1").value;
  var mail = document.getElementById("inputEmail1").value;
  var pass1 = document.getElementById("inputPassword1").value;
  console.log(mail);

  var tr = document.createElement("tr");
  tr.className = "list";

  tr.appendChild(document.createTextNode(name));
  lista.appendChild(tr);
  tr.appendChild(document.createTextNode(fname));
  lista.appendChild(tr);
  tr.appendChild(document.createTextNode(gen));
  lista.appendChild(tr);
  tr.appendChild(document.createTextNode(direc));
  lista.appendChild(tr);
  tr.appendChild(document.createTextNode(mail));
  lista.appendChild(tr);
}
*/

class Usuario {
  constructor(name, fname, gen, direc, mail) {
    this.name = name;
    this.fname = fname;
    this.gen = gen;
    this.direc = direc;
    this.mail = mail;
  }
}

document.querySelector("#registrar").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#inputName1").value;
  const fname = document.querySelector("#inputFirstName1").value;
  const gen = document.querySelector("#inputGenero1").value;
  const direc = document.querySelector("#inputAddress1").value;
  const mail = document.querySelector("#inputEmail1").value;

  const usuario = new Usuario(name, fname, gen, direc, mail);
});

//
function registrar() {
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

// cracion del objeto persona para realizar el calculo

function persona(nombre, correo, genero, dia, mes, anio) {
  this.nombre = nombre;
  this.correo = correo;
  this.genero = genero;
  this.dia = dia;
  this.mes = mes;
  this.anio = anio;
}

//usando la cracion del objeto persona para nuevo objeto
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
console.log(per.nombre, "tiene la edad de:", edad, "años.");
