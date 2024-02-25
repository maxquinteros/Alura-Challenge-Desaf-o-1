let modo = 1;

function encriptar() {
  document.getElementById("muñeco").style.display = "none";
  document.getElementById("mensaje-no-encontrado").style.display = "none";
  document.getElementById("mensaje-derecha").style.fontSize = "24px";
  document.getElementById("boton-copiar-texto").style.display = "inline";

  let contenido = document.getElementById("mensaje-izquierda").value;
  let resultado = "";

  switch (modo) {
    case 1:
      for (let letra of contenido) {
        resultado += `${letra.charCodeAt(0) + 6} `;
      }
      break;

    case 2:
      for (let letra of contenido) {
        resultado += String.fromCharCode(letra.charCodeAt(0) + 3);
      }
      break;

    case 3:
      for (let letra of contenido) {
        resultado += String.fromCharCode(letra.charCodeAt(0) + 1);
      }
      resultado = resultado.split("").reverse().join("");
      break;
  }

  document.getElementById("mensaje-derecha").innerHTML = resultado.trim();

  document.getElementById("mensaje-izquierda").value = "";
}

function desencriptar() {
  document.getElementById("muñeco").style.display = "none";
  document.getElementById("mensaje-no-encontrado").style.display = "none";
  document.getElementById("mensaje-derecha").style.fontSize = "24px";
  document.getElementById("boton-copiar-texto").style.display = "inline";

  let contenido = document.getElementById("mensaje-izquierda").value;
  let resultado = "";
  let contenidoLista = contenido.split(" ");

  switch (modo) {
    case 1:
      for (let numero of contenidoLista) {
        resultado += String.fromCharCode(numero - 6);
      }
      break;

    case 2:
      for (let letra of contenido) {
        resultado += String.fromCharCode(letra.charCodeAt(0) - 3);
      }
      break;

    case 3:
      for (let letra of contenido) {
        resultado += String.fromCharCode(letra.charCodeAt(0) - 1);
      }
      resultado = resultado.split("").reverse().join("");
      break;
  }

  document.getElementById("mensaje-derecha").innerHTML = resultado.trim();

  document.getElementById("mensaje-izquierda").value = "";
}

function modo1() {
  document.body.style.transition = "background 1s ease";
  document.body.style.background = "#f3f5fc";

  document.getElementById("encriptador1").style.background = "#052051";
  document.getElementById("encriptador2").style.background = "#052051";
  document.getElementById("encriptador3").style.background = "#052051";
  document.getElementById("boton-encriptar").style.background = "#052051";

  document.getElementById("mensaje-izquierda").style.color = "#052051";
  document.getElementById("mensaje-no-encontrado").style.color = "#052051";
  document.getElementById("mensaje-derecha").style.color = "#052051";

  modo = 1;
}

function modo2() {
  document.body.style.transition = "background 1s ease";
  document.body.style.background = "#f3fcf5";

  document.getElementById("encriptador1").style.background = "#05510f";
  document.getElementById("encriptador2").style.background = "#05510f";
  document.getElementById("encriptador3").style.background = "#05510f";
  document.getElementById("boton-encriptar").style.background = "#05510f";

  document.getElementById("mensaje-izquierda").style.color = "#05510f";
  document.getElementById("mensaje-no-encontrado").style.color = "#05510f";
  document.getElementById("mensaje-derecha").style.color = "#05510f";

  modo = 2;
}

function modo3() {
  document.body.style.transition = "background 1s ease";
  document.body.style.background = "#fcf3f3";

  document.getElementById("encriptador1").style.background = "#510505";
  document.getElementById("encriptador2").style.background = "#510505";
  document.getElementById("encriptador3").style.background = "#510505";
  document.getElementById("boton-encriptar").style.background = "#510505";

  document.getElementById("mensaje-izquierda").style.color = "#510505";
  document.getElementById("mensaje-no-encontrado").style.color = "#510505";
  document.getElementById("mensaje-derecha").style.color = "#510505";

  modo = 3;
}

function copiar() {
  let texto = document.getElementById("mensaje-derecha").innerHTML;
  navigator.clipboard.writeText(texto);
}
