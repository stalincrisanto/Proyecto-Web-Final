import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docente/docente.service';
import { stringify } from 'querystring';

import { MessageService, Message } from 'primeng';
import { ignoreElements } from 'rxjs/operators';
interface Alumno {
  cod_periodo_lectivo: string
  cod_alumno: string
  cod_nivel_educativo: string
  fecha: string
  estado: string
}
@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css'],
  providers: [MessageService]
})
export class AsistenciasComponent implements OnInit {

  lista
  semest
  anioLectivos: []
  materias: []
  alumnos: []
  cod_periodo_lectivo
  cod_nivel_educativo
  seleccionado
  fecha

  msgs: Message[] = [];


  constructor(private docenteService: DocenteService,private service: MessageService,) { }

  ngOnInit(): void {
    this.lista = [{ nombre: '1er Quimestre', codigo: '1' }, { nombre: '2do Quimestre', codigo: '2' }];
    var f = new Date();
    this.fecha = f.getFullYear()+ "-" + (f.getMonth() +1) + "-" +f.getDate() 
    this.obtenerListaAnioLectivo();
    this.onbtenerListaDeMaterias();
  }
  obtenerListaAnioLectivo() {

    this.docenteService.obtenerPeridoLectivo().subscribe((result) => {
      console.log(result)
      this.anioLectivos = result
      console.log(this.anioLectivos)

    })
  }
  
  onbtenerListaDeMaterias() {
    console.log("Entra a materias")
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    console.log(usuario)
    this.docenteService.obtenerAsignaturas(usuario[0].COD_PERSONA).subscribe((result) => {
      console.log(result)
      this.materias = result
    })
  }

  buscarEstudiantes() {
    console.log(this.seleccionado)
    this.docenteService.obtenerListadoDeAlumnos(this.seleccionado.COD_NIVEL_EDUCATIVO, this.cod_periodo_lectivo).subscribe((result) => {
      console.log(result)
      this.alumnos = result
    })
  }

  guardarAsistencias() {
    console.log(this.alumnos)
    var listaAsistenciasAlumnos = this.alumnos.map((alumno: any) => {
        return {
        cod_periodo_lectivo: this.cod_periodo_lectivo,
        cod_alumno: alumno.COD_PERSONA,
        cod_nivel_educativo: this.seleccionado.COD_NIVEL_EDUCATIVO,
        fecha:this.fecha,
        estado:this.obtenerEstadoDeAsistencia(alumno.estado)
      }
    });

    console.log("Lista", listaAsistenciasAlumnos)
     this.docenteService.guardarAsistenciasAlumnos(listaAsistenciasAlumnos).subscribe((result) => {
      console.log(result)})
      this.msgs =[];
      this.msgs.push({ severity: 'success', summary: 'Lista de asistencias guardada con exito', detail: 'almacenadas' });

  }

  obtenerEstadoDeAsistencia(estadoAsistencia: string) {
    let estado
    switch (estadoAsistencia) {
      case "justificado":
        estado = 'JUS'
        break;
      case "asistencia":
        estado = 'ASI'
        break;
      case "injustificado":
        estado = 'INJ'
        break;
      default:
        estado = 'N/A'
    }
    return estado
  }

  showSuccessViaMessages() {

}

}
