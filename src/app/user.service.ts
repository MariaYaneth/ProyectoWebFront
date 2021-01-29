import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { Profesores } from './profesores';
import { MessageService } from './message.service';
import { environment } from 'environments/environment';
import { Tareas } from './tareas';
import { Cursos } from './cursos';


@Injectable({ providedIn: 'root' })
export class UserSerivce {

  private udeaUrl =  environment.SERVER_API;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET hero by id. Return `undefined` when id not found */
    getUsuario<Data>(id: number): Observable<User> {
      const url = `${this.udeaUrl}/user/${id}`;
      return this.http.get<User[]>(url)
        .pipe(
          map(heroes => heroes[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} Usuario id=${id}`);
          }),
          catchError(this.handleError<User>(`getUsuario id=${id}`))
        );
        
    }
    public addEstudiante(estudiante){
      return this.http.post(`${this.udeaUrl}/estudiante`,estudiante,{responseType: 'text' as 'json'});
    }

    public getProfesor(cedula:number): Observable<any>{
      const url = `${this.udeaUrl}/profesor/${cedula}`;
      return this.http.get<Profesores>(url)
    }

    public getCurso(codigo:number): Observable<any>{
      const url = `${this.udeaUrl}/curso/${codigo}`;
      return this.http.get<Cursos>(url)
    }

    public getTareasCodigo(codigo : number): Observable<any>{
      const url = `${this.udeaUrl}/curso/tareas/${codigo}`;
      return this.http.get<Tareas[]>(url)
    }

    public addTareas(tarea : Tareas): Observable<any>{
      return this.http.post(`${this.udeaUrl}/tareas`,tarea,{responseType: 'text' as 'json'});
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    private log(message: string) {
      this.messageService.add(`UserSerivce: ${message}`);
    }
  }

