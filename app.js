// ELEMENTOS

let resultado = document.getElementById("resultado");

let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let igual = document.getElementById("igual");

let limpiar = document.getElementById("limpiar");

// FUNCIONES

let imprimirSumar = () => {
  operador.innerHTML = sumar.getAttribute("data-value");
  resultado.innerHTML += sumar.getAttribute("data-value");
};
let imprimirRestar = () => {
  operador.innerHTML = restar.getAttribute("data-value");
  resultado.innerHTML += restar.getAttribute("data-value");
};
let imprimirMultiplicar = () => {
  operador.innerHTML = multiplicar.getAttribute("data-value");
  resultado.innerHTML += multiplicar.getAttribute("data-value");
};
let imprimirDividir = () => {
  operador.innerHTML = dividir.getAttribute("data-value");
  resultado.innerHTML += dividir.getAttribute("data-value");
};

let escribir = () => {
  resultado.innerHTML = input1.value + " ";
};
let escribir2 = () => {
  resultado.innerHTML += " " + input2.value + " = ";
};

let operar = () => {
  if (operador.innerHTML === "+") {
    resultado.innerHTML += Number(input1.value) + Number(input2.value);
  } else if (operador.innerHTML === "-") {
    resultado.innerHTML += Number(input1.value) - Number(input2.value);
  } else if (operador.innerHTML === "x") {
    resultado.innerHTML += Number(input1.value) * Number(input2.value);
  } else if (operador.innerHTML !== "") {
    resultado.innerHTML += Number(input1.value) / Number(input2.value);
  } else {
    alert("Algo anduvo mal");
  }
};
let limpiarConsola = () => {
  input1.value = "";
  input2.value = "";
  resultado.innerHTML = "";
  operador.innerHTML = "";
};

// EVENTOS

igual.onclick = operar;
input1.onchange = escribir;
input2.onchange = escribir2;
sumar.onclick = imprimirSumar;
restar.onclick = imprimirRestar;
multiplicar.onclick = imprimirMultiplicar;
dividir.onclick = imprimirDividir;
limpiar.onclick = limpiarConsola;
