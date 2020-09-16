import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DocenteService {

    constructor(private httpClient: HttpClient) { }

    obtenerPeridoLectivo(): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/periodo/electivo`);
    }

    obtenerAsignaturas(codigoUsuario): Observable<any> {
        return this.httpClient.get(`${environment.url_api}/asignatura/docente/${codigoUsuario}`);

    }

    obtenerListadoDeAlumnos(cod_nivel_educativo,cod_periodo_lectivo): Observable<any>{
        return this.httpClient.get(`${environment.url_api}/lista/estudiantes/${cod_nivel_educativo}/${cod_periodo_lectivo}`);
    }

    guardarNotasAlumnos(lista){
        return this.httpClient.post(`${environment.url_api}/insertar/notas/alumnos/docente`,lista);
    }

    actualizarNotasAlumnos(lista){
        return this.httpClient.post(`${environment.url_api}/actualizar/calificaciones/estudiante`,lista);
    }

    guardarAsistenciasAlumnos(lista){
        return this.httpClient.post(`${environment.url_api}/insertar/asistencias/alumnos/docente`,lista)
    }

    guardarTareaAlumnos(tarea){
        return this.httpClient.post(`${environment.url_api}/insertar/tarea/alumnos/docente`,tarea)
    }




}
