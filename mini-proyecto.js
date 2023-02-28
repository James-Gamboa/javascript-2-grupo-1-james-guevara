// Crear un programa que simule una librería. Debe tener las siguientes características:
// 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
//      1.1 Nombre
//      1.2. Dirección
//      1.3. Libros // lista de libros
//      1.4. Comics // lista de comics
//      1.5. Debe contar un método que permita agregar libros y comics a la librería.

// 2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.

// 3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.

// 4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades privadas
 //  tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters

// 5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".

// 6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".


class Libreria {
  constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = [];
    this.comics = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  agregarComic(comic) {
    this.comics.push(comic);
  }
}

class Libro {
  constructor(titulo, autor, precio, cantidad, año) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;
    this._cantidad = cantidad;
    this._año = año;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get precio() {
    return this._precio;
  }

  get año() {
    return this._año;
  }

  set año(año) {
    this._año = año;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  getInfo() {
    if (this.cantidad > 0) {
      return `${this.titulo}, de ${this.autor}. Precio: ${this.precio} USD. Año de publicación: ${this.año}. Cantidad disponible: ${this.cantidad}`;
    } else {
      return `No hay ejemplares disponibles de ${this.titulo}, de ${this.autor}.`;
    }
  }
}

class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, año, dibujante, editorial, volumen) {
    super(titulo, autor, precio, cantidad, año);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }

  getInfo() {
    if (this.cantidad > 0) {
      return `${this.titulo}, de ${this.autor}. Precio: ${this.precio} USD. Año de publicación: ${this.año}. Cantidad disponible: ${this.cantidad}. Dibujante: ${this.dibujante}. Editorial: ${this.editorial}. Volumen: ${this.volumen}.`;
    } else {
      return `No hay ejemplares disponibles de ${this.titulo}, de ${this.autor}.`;
    }
  }
}

// Agregando datos 
const miLibreria = new Libreria("Libros y Comics", "Calle Falsa 123");

const libro1 = new Libro("El señor de los anillos", "J.R.R. Tolkien", 20, 5, 1954);
miLibreria.agregarLibro(libro1);

const comic1 = new Comic("Watchmen", "Alan Moore", 25, 3, 1986, "Dave Gibbons", "DC Comics", 1);
miLibreria.agregarComic(comic1);

const libroSinStock = new Libro("1984", "George Orwell", 15, 0, 1949);
miLibreria.agregarLibro(libroSinStock);

console.log(miLibreria);
console.log(libro1.getInfo());
console.log(comic1.getInfo());

// Cambiar cantidad de libros y año de publicacion
libro1.cantidad = 2;
libro1.año = 1954;

console.log(libro1.getInfo());
console.log(libroSinStock.getInfo());
