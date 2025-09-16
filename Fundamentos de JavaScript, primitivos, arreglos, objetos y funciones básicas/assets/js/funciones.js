function saludar(nombre) {
  //   console.log(arguments);
  //   console.log("Hola" + nombre);
  return [1, 2, 3, 4, 5];

  //Esto nunca se va a ejecutar

  console.log("Soy un codigo ramdom");
}

const saludar2 = function (nombre) {
  console.log("Hola" + nombre);
};

const saludo_flecha = () => {
  console.log("Saludo Flecha");
};

const saludo_flecha2 = (nombre) => {
  console.log("Saludo Flecha" + nombre);
};

const retorno_de_saludar = saludar("Duban", 40, true, "Chile");
console.log(retorno_de_saludar[0], retorno_de_saludar[1]);
// saludar2("Camila");
// saludo_flecha();
// saludo_flecha2("Pablo");

function sumar(a, b) {
  return a + b;
}

const restar = (c, d) => c - d;

function Aleatorio() {
  return Math.random();
}

console.log(Aleatorio());

//Convertir aleatorio a flecha

const Number_Aletorio2 = () => Math.random();

console.log("Numero Aleatorio 2", Number_Aletorio2());

console.log(sumar(1, 3));
console.log(restar(5, 2));
