import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }



  loginEdutic(usuario): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post(`${environment.url_api}/login`,usuario);
  }



}
