import { Tareas } from "./tareas";

export interface Cursos {
  codigo: number;
  nombre: string;
  creditos: number;
  imagen: string;
  tareas: Tareas[];
}