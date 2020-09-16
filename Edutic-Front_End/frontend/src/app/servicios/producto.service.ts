import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { 
  }

  obtenerTodosProductos(): Observable<any>
  {
    //let header = new HttpHeaders().set('Type-content','aplication/json');
    return this.httpClient.get('http://localhost:3000/producto');
  }

  obtenerProducto(cod_producto): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/'+cod_producto);
  }

  agregarProducto(producto:any)
  {
    let json = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("http://localhost:3000/",json,{headers:headers});
  }

  eliminarProducto(cod_producto): Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/"+cod_producto);
  }

}
