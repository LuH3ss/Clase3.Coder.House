import  Persona  from "./persona"

class Datos implements Persona {
    nombre:string;
    apellidos:string;
    edad:number;
    direccion:string | number;
    constructor (nombre:string, apellidos:string, edad:number, direccion:string | number){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.direccion=direccion
    }
}

let persona1:Datos = new Datos ('juan', 'perez', 38, 'calle falsa 123');

console.log(persona1);