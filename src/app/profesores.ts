import { User } from "./user"
import { Cursos } from "./cursos"

export interface Profesores{
  cedula: number;
  nombre: string;
  apellido: string;
  edad: number;
  titulo: string;
  area: number;
  user: User;
  cursos: Cursos[];

  // constructor(userResponse: any){
  //   this.cedula = userResponse.cedula;
  //   this.nombre = userResponse.nombre;
  //   this.apellido = userResponse.apellido;
  //   this.edad = userResponse.edad;
  //   this.titulo = userResponse.titulo;
  //   this.area = userResponse.area;
  //   this.user = userResponse.user;
  //   this.cursos = userResponse.cursos;
  // }
}