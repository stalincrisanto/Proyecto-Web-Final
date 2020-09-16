import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docente/docente.service';
import { MessageService, Message } from 'primeng';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [MessageService]
})
export class TareasComponent implements OnInit {

  itemForm: FormGroup;
  lista
  semest
  anioLectivos: []
  materias: []
  alumnos: []
  cod_periodo_lectivo
  cod_nivel_educativo
  seleccionado
  fecha
  materia

  msgs: Message[] = [];

  public fileData;

  constructor(
    private docenteService: DocenteService,
    private service: MessageService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.lista = [{ nombre: '1er Semestre', codigo: '1' }, { nombre: '2do Semestre', codigo: '2' }];
    var f = new Date();
    this.fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate()
    this.buidForm();
    this.obtenerListaAnioLectivo();
    this.onbtenerListaDeMaterias();
  }

  private buidForm() {

    this.itemForm = this.formBuilder.group({
      tituloTarea: [''],
      detalleTarea: [''],
      fecha: [''],
    })

  }

  fileProgress(event) {
    this.fileData = event.target.files;
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
  guardarTarea() {
    let data = this.itemForm.value
    console.log(data.tituloTarea)
    const usuario = JSON.parse(window.localStorage.getItem('usuario'));
    let tarea = {
      titulo_tarea:data.tituloTarea,
      detalle_tarea:data.detalleTarea,
      fecha_entrega:data.fecha,
      cod_nivel_educativo:this.seleccionado.COD_NIVEL_EDUCATIVO,
      cod_asignatura:this.seleccionado.COD_ASIGNATURA,
      cod_periodo_lectivo:this.cod_periodo_lectivo,
      cod_paralelo:this.seleccionado.COD_PARALELO,
      cod_docente:usuario[0].COD_PERSONA,
    }
    console.log(tarea)
    this.docenteService.guardarTareaAlumnos(tarea).subscribe((result) => {
      console.log(result)
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Tarea asignada', detail: 'la tarea a sido regisrada con exito' });
    })

  }

  buscarMateria() {
    this.materia = this.seleccionado.NOMBRE
  }
}
