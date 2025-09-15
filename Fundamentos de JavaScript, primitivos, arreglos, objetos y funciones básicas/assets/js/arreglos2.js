let juegos = ["Zelda", "Mario", "Metroid", "Budokay", 123];
console.log("Largo:", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

let agregar_primer_elemento = juegos.unshift("Descaro");
console.log({ agregar_primer_elemento });

let borrar_elemento = juegos.pop();
console.log({ borrar_elemento, juegos });

let pos = 1;
console.log(juegos);
let juegos_borrados = juegos.splice(pos, 1);
console.log({ juegos_borrados, juegos });

let MetroidIndex = juegos.indexOf("Metroid");
console.log(MetroidIndex);
