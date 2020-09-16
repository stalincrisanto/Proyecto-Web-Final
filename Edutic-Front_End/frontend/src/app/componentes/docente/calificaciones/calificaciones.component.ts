import { Component, OnInit } from '@angular/core';

import { DocenteService } from 'src/app/servicios/docente/docente.service';
import { MessageService, Message } from 'primeng';

interface Alumno {
  cod_periodo_lectivo: string
  cod_alumno: string
  cod_nivel_educativo: string
  cod_asignatura: string
  cod_paralelo: string
  cod_docente: string
  nota1: string
  nota2: string
  nota3: string
}
@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css'],
  providers: [MessageService]
})

export class CalificacionesComponent implements OnInit {
  lista
  semestre
  anioLectivos: []
  materias: []
  alumnos: []
  cod_periodo_lectivo
  cod_nivel_educativo = "seleccione"
  seleccionado

  msgs: Message[] = [];




  constructor(private docenteService: DocenteService,private service: MessageService) { }

  ngOnInit(): void {
    this.lista = [{ nombre: '1er Quimestre', codigo: '1' }, { nombre: '2do Quimestre', codigo: '2' }];
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

  guardarCalificaciones() {
    console.log(this.alumnos)
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    var listaNotasAlumnos = this.alumnos.map((alumno: any) => {

      return {
        cod_periodo_lectivo: this.cod_periodo_lectivo,
        cod_alumno: alumno.COD_PERSONA,
        cod_nivel_educativo: this.seleccionado.COD_NIVEL_EDUCATIVO,
        cod_asignatura: this.seleccionado.COD_ASIGNATURA,
        cod_paralelo: this.seleccionado.COD_PARALELO,
        cod_docente: usuario[0].COD_PERSONA,
        nota1: alumno.notCal,
        nota2: alumno.notCal1,
        nota3: alumno.notCal2
      }
    });

    console.log("Lista", listaNotasAlumnos)
    this.docenteService.guardarNotasAlumnos(listaNotasAlumnos).subscribe((result) => {
      console.log(result)
      this.msgs =[];
      this.msgs.push({ severity: 'success', summary: 'Lista de calificaciones guardada con exito', detail: '1er quimestre' });
    })

  }

  actualizarCalificaciones() {
    console.log(this.alumnos)
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    var listaNotasAlumnos = this.alumnos.map((alumno: any) => {

      return {
        COD_ALUMNO: alumno.COD_PERSONA,
        COD_ASIGNATURA: this.seleccionado.COD_ASIGNATURA,
        NOTA4: alumno.nota4,
        NOTA5: alumno.nota5,
        NOTA6: alumno.nota6
      }
    });

    console.log("Lista", listaNotasAlumnos)
    this.docenteService.actualizarNotasAlumnos(listaNotasAlumnos).subscribe((result) => {
      console.log(result)
      this.msgs =[];
      this.msgs.push({ severity: 'success', summary: 'Lista de calificaciones guardada con exito', detail: '1er quimestre' });
    })

  }

}
