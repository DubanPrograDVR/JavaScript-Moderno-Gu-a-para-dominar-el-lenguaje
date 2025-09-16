const personaje = {
  nombre: "Tony Stark",
  codeName: "Iron man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -188.7,
  },
  traje: ["Marck I", "Marck V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90285",
    ubicacion: "Malibu,California",
  },
};

console.log(personaje);
console.log("Mi nombre es: ", personaje.nombre);
console.log("Mi nombre es: ", personaje["nombre"]);
console.log("Mi Edad es: ", personaje.edad);
console.log("La Latitud es:", personaje.coords.lat);
console.log("Cantidad de Trajes:", personaje.traje[personaje.traje.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

// Mas Detalles

delete personaje.edad;

personaje.casado = true;

const entries_pares = Object.entries(personaje);
console.log(entries_pares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
