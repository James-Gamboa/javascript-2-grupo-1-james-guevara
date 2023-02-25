// 1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
// Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.

class Persona {
  constructor(nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

  saludar() {
    return `Hola, soy ${this.nombre} ${this.apellido}`;
  }
}

const persona1 = new Persona("James", "Gamboa");
console.log(persona1.saludar());

// 2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
// Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado.

class Empleado extends Persona {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso) {
    super(nombre, apellido, id, edad, ubicacion);
    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.ingreso = ingreso;
  }

  imprimirSueldo() {
    const sueldoAnual = this.sueldo * 12;
    console.log(`El sueldo anual de ${this.nombre} ${this.apellido} es de $${sueldoAnual}.`);
  }
}

const empleado1 = new Empleado("James", "Gamboa", 2, "22", "Heredia", 300, "Desarrollador Junior", "Tecnologia", "2021");
empleado1.imprimirSueldo();


// 3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
// Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
// el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico.
// Agregar un método que se llame agregarLenguaje para agregar un nuevo lenguaje al array de lenguajes.

class Desarrollador extends Empleado {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso, lenguajes) {
    super(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso);
    this.lenguajes = lenguajes;
  }

  lenguajeDominado() {
    let lenguajeMayorConocimiento = {nombreDeLenguaje: "", conocimiento: 0};
    for (let i = 0; i < this.lenguajes.length; i++) {
      if (this.lenguajes[i].conocimiento > lenguajeMayorConocimiento.conocimiento) {
        lenguajeMayorConocimiento = this.lenguajes[i];
      }
    }
    console.log(`${this.nombre} ${this.apellido} domina el lenguaje ${lenguajeMayorConocimiento.nombreDeLenguaje}`);
  }

  agregarLenguaje(nombreDeLenguaje, conocimiento) {
    this.lenguajes.push({nombreDeLenguaje, conocimiento});
  }
}

const desarrollador1 = new Desarrollador("James","Gamboa", 2, "22", "Heredia", 300, "Desarrollador Junior", "Tecnologia", "2021", [
  {nombreDeLenguaje: "JavaScript", conocimiento: 90},
  {nombreDeLenguaje: "Python", conocimiento: 80},
  {nombreDeLenguaje: "Java", conocimiento: 70},
]);

desarrollador1.agregarLenguaje("Rust", 60);
console.log(desarrollador1.lenguajes);
