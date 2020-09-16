import { Component, OnInit } from '@angular/core';
import { InfraestructuraService } from '../../../servicios/infraestructura.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  nuevaSede: any = {cod_sede:'',nombre:'',direccion:'',telefono:'',codigo_postal:''}
  sedes: any;
  sedeSeleccionada: any = {cod_sede:'',nombre:'',direccion:'',telefono:'',codigo_postal:''}
  displaySaveDialog: boolean = false;
  cod_sede_mod: string;

  constructor(private infraestructuraService:InfraestructuraService, private messageService: MessageService) { 
    this.obtenerSedes();
  }

  ngOnInit(): void {
  }

  showSaveDialog(cod_sede)
  {
    this.infraestructuraService.obtenerSedeId(cod_sede).subscribe(resultado=>{
      this.sedeSeleccionada=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
    this.displaySaveDialog = true;
  }

  modificarSede(cod_sede)
  {
    console.log("SEDE-->"+this.sedeSeleccionada);
    console.log("SU CODIGO-->"+cod_sede);
    this.infraestructuraService.modificarSede(this.sedeSeleccionada,cod_sede).subscribe(resultado=>{
      this.sedeSeleccionada=resultado;
      console.log(resultado);
    },error=>{
      console.log(error);
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

  agregarSede(nuevaSede)
  {
    this.infraestructuraService.agregarSede(this.nuevaSede).subscribe(resultado=>{
      this.obtenerSedes();
      this.messageService.add({severity:'success',summary:'Resultado',detail:'Se guardo la sede de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
    nuevaSede.cod_sede="";
    nuevaSede.nombre="";
    nuevaSede.direccion="";
    nuevaSede.telefono="";
    nuevaSede.codigo_postal="";
  }
  
  eliminarSede(cod_sede)
  {
    console.log("ELIMINAR");
    this.infraestructuraService.eliminarSede(cod_sede).subscribe(resultado=>{
      this.obtenerSedes();
      this.messageService.add({severity:'warn',summary:'Resultado',detail:'Se eliminó la sede de forma correcta'});
    },
    error=>{
      console.log(JSON.stringify(error));
    });
  }

}
