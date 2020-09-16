import { Component, OnInit } from '@angular/core';
import { InfraestructuraService } from '../../../servicios/infraestructura.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrls: ['./edificios.component.css']
})
export class EdificiosComponent implements OnInit {

  nuevoEdificio: any = {cod_edificio:'', cod_sede:'',nombre:'',cantidad_pisos:''};
  edificios: any;
  sedeSeleccionada: any = {cod_sede:'',nombre:'',direccion:'',telefono:'',codigo_postal:''};
  sedes: any //= {cod_sede:'',nombre:'',direccion:'',telefono:'',codigo_postal:''};
  //sedeSeleccionada:any = [];
  //sedeSeleccionada: any = {cod_sede:'',nombre:'',direccion:'',telefono:'',codigo_postal:''}
  displaySaveDialog: boolean = false;

  constructor(private infraestructuraService:InfraestructuraService, private messageService: MessageService) { 
    this.obtenerEdificios();
    this.obtenerSedes();
  }

  ngOnInit(): void {
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

  obtenerSedes()
  {
    this.infraestructuraService.obtenerSedes().subscribe(resultado=>{
      console.log(resultado);
      this.sedes=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }

  agregarEdificio(nuevoEdificio)
  {
    this.infraestructuraService.agregarEdificio(this.nuevoEdificio).subscribe(resultado=>{
      this.obtenerEdificios();
      this.messageService.add({severity:'success',summary:'Resultado',detail:'Se guardo el edificio de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
    nuevoEdificio.cod_edificio="";
    nuevoEdificio.cod_sede="";
    nuevoEdificio.nombre="";
    nuevoEdificio.cantidad_pisos="";
  }

  eliminarEdificio(cod_edificio)
  {
    console.log("ELIMINAR");
    this.infraestructuraService.eliminarEdificio(cod_edificio).subscribe(resultado=>{
      this.obtenerEdificios();
      this.messageService.add({severity:'warn',summary:'Resultado',detail:'Se eliminó el edificio de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
  }

  onSelect(cod){
    console.log("COD->",cod);
  }
}
