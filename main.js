// 1. Escriba una function que escriba un número a la inversa
function invertirNumero(num) {
  let numstr = num.toString();
  let invertido = numstr.split("").reverse().join("");
  console.log(invertido);
}
invertirNumero(231);

// 2. Escriba una function que acepte un string como parámetro
// y convierta cada primer letra de cada palabra en mayúscula

function mayuscula(str) {
  let mayuscula = str.split(" ");
  mayuscula = mayuscula.map((word) => word[0].toUpperCase() + word.slice(1));
  return mayuscula.join(" ");
}
console.log(mayuscula("hola mundo"));
