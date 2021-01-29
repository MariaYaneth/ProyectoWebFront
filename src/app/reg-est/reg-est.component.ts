import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'app/estudiante';
import { User } from 'app/user';
import { UserSerivce } from 'app/User.Service';

@Component({
  selector: 'app-reg-est',
  templateUrl: './reg-est.component.html',
  styleUrls: ['./reg-est.component.css']
})
export class RegEstComponent implements OnInit {
  user : User;
  estudiante : Estudiante; 
  message : any;
  constructor(
    private service:UserSerivce
  ) { }

  ngOnInit(): void {
  }
  public registrarEstudiante(cedula: number, nombre: string, apellido: string, edad: number, carrera: string, semestre: number, promedio: number, usuario: string, contrasena: string){
    console.log("Enviando");
    this.estudiante = {
      "cedula": cedula,
      "nombre" :nombre,
      "apellido" : apellido,
      "edad" : edad,
      "carrera" : carrera,
      "semestre" : semestre,
      "promedio" : promedio,
      "user" : {
        "cedula": cedula,
        "nombre" :nombre,
        "usuario" : usuario,
        "contraseña" : contrasena,
      }
    }
    let resp =this.service.addEstudiante(this.estudiante);
    resp.subscribe((data)=>this.message);
    console.log(this.message);
  }

}
