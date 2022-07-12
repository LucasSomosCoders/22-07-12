

let PersonaES5 = function(name, lastName, date){
  this.nombre = name;
  this.apellido = lastName;
  this.fecha = date;
  this.calcularEdad = function(){
    let fechaCalculada = 2022 - this.fecha;
    return fechaCalculada;
  }
  this.mostrarDatos = function(){
    console.log('nombre: '+ this.nombre + '. apellido: '+ this.apellido + '. y tu edad es: '+ this.calcularEdad());
  }
}
//                                          '22/08/1990'
let PersonaNico = function(name, lastName, date){
  this.nombre = name;
  this.apellido = lastName;
  this.fecha = new Date(date);
  this.calcularEdad = function(){
    let ahora = new Date();
    let anios = ahora.getFullYear() - this.fecha.getFullYear();
    // 2022 - 1990 = 32
    // 07 - 08 = >0
    // 12 - 22 = >0
    return anios;
  }
}

class Persona {
  constructor(name, lastName, date) {
    this.nombre = name;
    this.apellido = lastName;
    this.fecha = date;
    this.calcularEdad = function(){
      let fechaCalculada = 2022 - this.fecha;
      return fechaCalculada;
    }
    this.mostrarDatos = function(){
      console.log(`nombre: ${this.nombre} apellido: ${this.apellido} y tu edad es: ${this.calcularEdad()}`);
    }
  }
}