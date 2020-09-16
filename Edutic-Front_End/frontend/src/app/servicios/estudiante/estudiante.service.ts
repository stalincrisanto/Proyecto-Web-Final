import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EstudianteService {

    constructor(private httpClient: HttpClient) { }

    obtenerCalificacionesEstudiante(cod_estudiante,cod_periodo_lectivo): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/calificaciones/estudiante/${cod_estudiante}/${cod_periodo_lectivo}`);
    }

    obtenerTareasEstudiante(cod_estudiante): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/tarea/estudiante/${cod_estudiante}`);
    }

    obtenerNotas1(cod_alumno,cod_asignatura): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/calificaciones/primero/${cod_alumno}/${cod_asignatura}`);
    }

    obtenerNotas2(cod_alumno,cod_asignatura): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/calificaciones/segundo/${cod_alumno}/${cod_asignatura}`);
    }

  



}
