import { User } from "./user"

export interface Estudiante{
  cedula: number;
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
  semestre: number;
  promedio: number;
  user: User;
}