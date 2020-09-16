import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/servicios/estudiante/estudiante.service';

@Component({
  selector: 'app-tarea-estudiante',
  templateUrl: './tarea-estudiante.component.html',
  styleUrls: ['./tarea-estudiante.component.css']
})
export class TareaEstudianteComponent implements OnInit {

  tareas = []

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.obtenerTaeasEstudiante();

  }

  obtenerTaeasEstudiante() {
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    console.log(usuario[1].COD_PERSONA)
    this.estudianteService.obtenerTareasEstudiante(usuario[1].COD_PERSONA).subscribe((result) => {
      this.tareas = result

    })
  }

}
