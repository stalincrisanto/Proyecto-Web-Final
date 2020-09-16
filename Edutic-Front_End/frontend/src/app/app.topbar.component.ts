import { Component, OnInit } from '@angular/core';
import { AppMainComponent} from './app.main.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

  nombreUsuario
  rolUsuario

    constructor(public app: AppMainComponent,private router:Router) {}
  ngOnInit(): void {
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.nombreUsuario=usuario[0].NOMBRE_USUARIO
    switch (usuario[0].COD_ROL) {
      case 'PRO':
        this.rolUsuario="Docente"
        break;
      case 'EST':
        this.rolUsuario="Estudiante"
      case 'ADM':
        this.rolUsuario="Administrador"
        break;

      default:

    }
  }

  cerrarSesion(){

    localStorage.clear();
    localStorage.removeItem('usuario');
    this.router.navigate(['/edutic'])
  }



}
