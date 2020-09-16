import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docente/docente.service';
import { EstudianteService } from 'src/app/servicios/estudiante/estudiante.service';
import { ignoreElements } from 'rxjs/operators';

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
  selector: 'app-calificacionesEstudiante',
  templateUrl: './calificacionesEstudiante.component.html',
  styleUrls: ['./calificacionesEstudiante.component.css']
})

export class CalificacionesEstudianteComponent implements OnInit {
  lista 
  semestre
  anioLectivos: []
  materias: []
  calificaciones: []
  cod_periodo_lectivo
  cod_nivel_educativo
  seleccionado


  notas=0
  constructor(private docenteService: DocenteService,private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.lista=[{nombre: '1er Quimestre',codigo: '1'},{nombre: '2do Quimestre',codigo: '2'}];
    this.obtenerListaAnioLectivo();
    this.obtenerListaDeMaterias();
  }
  obtenerListaAnioLectivo() {

    this.docenteService.obtenerPeridoLectivo().subscribe((result) => {
      console.log(result)
      this.anioLectivos = result
      console.log(this.anioLectivos)

    })
  }

  obtenerListaDeMaterias() {
    console.log("Entra a materias")
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    console.log(usuario)
    this.docenteService.obtenerAsignaturas(110).subscribe((result) => {
      console.log(result)
      this.materias = result
    })
  }

  buscarCalificacionesEstudiante() {

    console.log("Se ejecuta bucasr")

    console.log(this.semestre)

   if(this.semestre==1){
    console.log("entra1")
     this.obtenerCalificaciones1()

   }
   else if(this.semestre==2){
    console.log("entra2")
     this.obtenerCalificaciones2()

   }
    // const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    // this.estudianteService.obtenerCalificacionesEstudiante(usuario[1].COD_PERSONA,this.cod_periodo_lectivo)
    // .subscribe((result) => {
    //   console.log(result)
    //   this.calificaciones = result
    // })
  }

  obtenerCalificaciones1(){
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.estudianteService.obtenerNotas1(usuario[1].COD_PERSONA,this.seleccionado.COD_ASIGNATURA)
    .subscribe((result) => {
      console.log(result)
      this.calificaciones = result
      this.notas=1
    })
  }

  obtenerCalificaciones2(){
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.estudianteService.obtenerNotas2(usuario[1].COD_PERSONA,this.seleccionado.COD_ASIGNATURA)
    .subscribe((result) => {
      console.log(result)
      this.calificaciones = result
      this.notas=2
    })
  }

}
