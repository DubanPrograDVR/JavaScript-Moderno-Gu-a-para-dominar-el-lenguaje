// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Duban", "Vasquez");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  //   console.log(args);
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "False",
  "hola"
);

console.log(casado, vivo, nombre, saludo);

const { apellido: nuevoApellido } = crearPersona("Duban", "Romero");
console.log({ nuevoApellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Iron man",
  vivo: false,
  edad: 40,
  traje: ["Marck I", "Marck V", "Hulkbuster"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

console.log();
