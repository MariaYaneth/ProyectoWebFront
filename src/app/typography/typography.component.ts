import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'app/cursos';
import { Tareas } from 'app/tareas';
import { UserSerivce } from 'app/User.Service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  tareas$ : Tareas[];
  tarea : any;
  curso : Cursos;
  id : number;
  message : any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserSerivce
  ) { }

  ngOnInit() {
    this.getTareas();
    
  }

  getTareas(): void{
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getTareasCodigo(this.id)
      .subscribe(data => this.tareas$ = data);
    this.userService.getCurso(this.id)
      .subscribe(data => this.curso = data);
  }
  addTareas(nombre, fecha): void{
    console.log("Enviando")
    this.tarea = {
      "nombre": nombre,
      "fecha" : fecha,
      "nota" :  0,
      "curso" : this.curso
    }
    let resp =this.userService.addTareas(this.tarea);
    resp.subscribe((data)=>this.message);
    console.log(this.message);
    this.tareas$.push(this.tarea);
    this.getTareas();
  }

}
