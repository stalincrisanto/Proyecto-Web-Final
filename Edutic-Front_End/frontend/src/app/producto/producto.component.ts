import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  nuevoProducto: any={nombre:'',precio:'',fecha_caducidad:'',descripcion:''}
  productos: any;

  constructor(private productoService:ProductoService) 
  { 
    this.obtenerProductos();
  }
  obtenerProductos()
  {
    this.productoService.obtenerTodosProductos().subscribe(resultado=>{
      console.log(resultado);
      this.productos=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }

  ngOnInit(): void 
  {
    
  }

  obtenerProducto(cod_producto)
  {
    this.productoService.obtenerProducto(cod_producto).subscribe(resultado=>{
      console.log(resultado);
      this.nuevoProducto=resultado;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }

  agregarProducto()
  {
    console.log("EVENTO");
    this.productoService.agregarProducto(this.nuevoProducto).subscribe(resultado=>{
      this.obtenerProductos();
    },
    error=>{
      console.log(JSON.stringify(error));
    });
  }

  eliminarProducto(cod_producto)
  {
    console.log("ELIMINAR");
    this.productoService.eliminarProducto(cod_producto).subscribe(resultado=>{
      this.obtenerProductos();
    },
    error=>{
      console.log(JSON.stringify(error));
    });
  }

  modificarProducto(cod_producto)
  {
    console.log(cod_producto);
    this.obtenerProducto(cod_producto);
  }

}
