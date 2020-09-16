import { Component, OnInit } from '@angular/core';
import { InfraestructuraService } from '../../../servicios/infraestructura.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  aulas:any;
  nuevaAula: any = {cod_aula:'', cod_edificio:'',nombre:'',capacidad:'',tipo:'',piso:''};
  edificios: any;

  constructor(private infraestructuraService:InfraestructuraService, private messageService: MessageService) { 
      this.obtenerAulas();
      this.obtenerEdificios();
  }

  ngOnInit(): void {
  }

  obtenerAulas()
  {
    this.infraestructuraService.obtenerAulas().subscribe(resultado=>{
      console.log(resultado);
      this.aulas=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }
  obtenerEdificios()
  {
    this.infraestructuraService.obtenerEdificios().subscribe(resultado=>{
      console.log(resultado);
      this.edificios=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }

  agregarAula(nuevaAula)
  {
    this.infraestructuraService.agregarAula(this.nuevaAula).subscribe(resultado=>{
      this.obtenerAulas();
      this.messageService.add({severity:'success',summary:'Resultado',detail:'Se guardo la aula de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
    nuevaAula.cod_aula="";
    nuevaAula.cod_edificio="";
    nuevaAula.nombre="";
    nuevaAula.capacidad="";
    nuevaAula.tipo="";
    nuevaAula.piso="";
  }

  eliminarAula(cod_aula)
  {
    console.log("ELIMINAR");
    this.infraestructuraService.eliminarAula(cod_aula).subscribe(resultado=>{
      this.obtenerAulas();
      this.messageService.add({severity:'warn',summary:'Resultado',detail:'Se eliminó la aula de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
  }

}
