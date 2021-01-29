import { Cursos } from "./cursos";

export interface Tareas{
  id : number;
  nombre : string;
  fecha : string;
  nota : number;
  curso : Cursos;
}