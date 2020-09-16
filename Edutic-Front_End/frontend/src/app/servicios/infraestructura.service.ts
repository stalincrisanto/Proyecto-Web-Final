import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {

  constructor(private httpClient:HttpClient) { }

  obtenerSedes(): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/sedes');
  }

  obtenerSedeId(cod_sede)
  {
    return this.httpClient.get("http://localhost:3000/sedes/"+cod_sede);
  }

  agregarSede(sede:any)
  {
    let json = JSON.stringify(sede);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("http://localhost:3000/sedes/",json,{headers:headers});
  }

  modificarSede(sede:any,cod_sede)
  {
    console.log(cod_sede);
    return this.httpClient.put("http://localhost:3000/sedes/"+cod_sede,sede);
  }

  eliminarSede(cod_sede): Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/sedes/"+cod_sede);
  }

  obtenerEdificios(): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/edificios');
  }

  agregarEdificio(edificio:any): Observable<any>
  {
    let json = JSON.stringify(edificio);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("http://localhost:3000/edificios/",json,{headers:headers});
  }

  eliminarEdificio(cod_edificio): Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/edificios/"+cod_edificio);
  }

  obtenerAulas(): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/aulas');
  }

  agregarAula(aula:any): Observable<any>
  {
    let json = JSON.stringify(aula);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("http://localhost:3000/aulas/",json,{headers:headers});
  }

  eliminarAula(cod_edificio): Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/aulas/"+cod_edificio);
  }

}
