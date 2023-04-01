// Ejercicios de práctica
// 1. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es par o impar.
function esPar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve('El número es par');
    } else {
      reject('El número es impar');
    }
  });
}
// 2. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es primo o no.
function esPrimo(numero) {
  return new Promise((resolve, reject) => {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        reject('El número no es primo');
      }
    }
    resolve('El número es primo');
  });
}

esPar(4)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));

esPrimo(7)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));

