const product = {
  name: 'productName',
  price: 200,
  quantity: 50,
  tax: 13,
  category: ['home'],
  subCategory: 'furniture',
  total: function() {
      return price + (price * this.tax / 100);
  },
}

//dot notation
// console.log(product.category);
product.nuevoKey = 'es un nuevo key';

product.category.push('xcategory');

delete product.subCategory

//bracket notation
// console.log(product['category']);

// console.log(product);


// =======================================================================================
// ============================= EJEMPLOS OOP ============================================

// const estudianteUno = {
//   nombre: 'Andy',
//   apellidos: 'Smith',
//   fechaNacimiento: '1990-10-30',
//   id: 'a-0001',
//   nuevoIngreso: true,
//   carrera: 'Historía del Arte',
//   cursosMatriculados: ['Introducción a la pintura', 'Historia del Arte I'],
//   cursosCursados: [],
// }

function estudianteNuevo(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  const datos = {};

  datos.nombre = nombre;
  datos.apellidos = apellidos;
  datos.fechaNacimiento = fechaNacimiento;
  datos.id = id;
  datos.nuevoIngreso = nuevoIngreso;
  datos.carrera = carrera;
  datos.cursosMatriculados = cursosMatriculados || [];
  datos.cursosCursados = cursosCursados || [];
  
  datos.matricular = function(curso) {
    this.cursosMatriculados.push(curso)
  }

  datos.retirarMatricula = function(curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }

    // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }

  return datos;
}

const andy = estudianteNuevo('Andy', 'Smith', '1990-10-30', 'a-0001', true, 'Historía del Arte', ['Introducción a la pintura']);
const ana =  estudianteNuevo('Ana', 'Patel', '1990-10-30', 'arq-0001', true, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I']);
// console.log(ana);

const listaEstudiantes = [];
listaEstudiantes.push(andy)
listaEstudiantes.push(ana)

// console.log(listaEstudiantes);
// console.log(andy);

andy.matricular('Historia del Arte I');
ana.retirarMatricula('Historia del Arte I')

console.log(andy)

// console.log(listaEstudiantes);


// **** Constructors **** //
// 1. Crear un método que permita agregar cursos a la lista de cursos aprobados. 
//El usuario debe poder ingresar un objeto con el nombre del curso, nota.
// 2. Y dependiendo la nota se agrega de manera automática una propiedad nueva 
//que se llama estado: cuyo valor sera de aprobado (nota > 70) o reprobado (nota < 70) 

function EstudianteConstructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.id = id;
  this.nuevoIngreso = nuevoIngreso;
  this.carrera = carrera;
  this.cursosMatriculados = cursosMatriculados || [];
  this.cursosCursados = cursosCursados || [];

  this.matricular = function(curso) {
    this.cursosMatriculados.push(curso)
  }

  this.retirarMatricula = function(curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  }

  this.cursoaprobado = function(curso, nota) {
    this.cursosCursados.push({ curso, nota });
    this.cursosCursados[this.cursosCursados.length - 1].estado = nota >= 70 ? 'aprobado' : 'reprobado';
  }
}

const estudiantePrueba = new EstudianteConstructor('Test', 'Testing', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'], [{curso: 'Prueba', nota: 50 }])

console.log(estudiantePrueba);

estudiantePrueba.cursoaprobado('Prueba 2', 80);
console.log(estudiantePrueba.cursosCursados);



