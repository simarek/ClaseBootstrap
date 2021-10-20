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
    location.href = "admin.html";
    //limpiando campos del formulaio, reseteo de datos
    form.reset();
  }
  return false;
}

// objeto usuario
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

  //registrar1();

  const usuario = new Usuario(name, fname, gen, direc, mail);
});

//
function registrar1() {
  reg.reset();
  console.log(name);

  if (name != "" || fname != "" || mail != "" || pass1 != "") {
    alert("Registro realizado con exito... Gracias");
    // saltar a la pagina web admin
    location.href = "./index.html";
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
