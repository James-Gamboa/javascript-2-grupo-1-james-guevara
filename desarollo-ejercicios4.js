class Estudiante {
  constructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados = [], cursosCursados = []) {
    this.nombre = nombre;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.cursosMatriculados = cursosMatriculados;
    this.cursosCursados = cursosCursados;
  }

  matricular(curso) {
    this.cursosMatriculados.push(curso)
  }

  retirarMatricula(curso) {
    const index = this.getCursosMatriculados().indexOf(curso); 
    if (index > -1) {
      this.setCursosMatriculados(this.cursosMatriculados.splice(index, 1));
    }
  }

  agregarCursosCursado(curso, nota) {
    const cursoObj = {curso, nota};
    cursoObj.estado = nota >= 70 ? 'aprobado' : 'reprobado';

    if(nota >= 70) {
      cursoObj.estado = 'aprobado'
    } else {
      cursoObj.estado = 'reprobado'
    }

    this.cursosCursados.push(cursoObj)
  }

  getCursosMatriculados() {
    return this.cursosMatriculados;
  }

  setCursosMatriculados(cursosMatriculados) {
    this.cursosMatriculados = cursosMatriculados;
  }
}

const estudiantePrueba2 = new Estudiante('Test', 'Testing', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'], [{curso: 'Prueba', nota: 50 }])

console.log(estudiantePrueba2);
