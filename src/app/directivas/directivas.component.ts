import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  // Está el usuario logueado o no
  usuarioLogueado = true
  usuarios = [
    {
      id:1,
      nombre:"Jose",
      sueldo:8000,
      activo:true
    },
    {
      id:2,
      nombre:"Pepe",
      sueldo:80000,
      activo:false
    },
    {
      id:3,
      nombre:"Cristiano",
      sueldo:5000,
      activo:true
    },
    {
      id:4,
      nombre:"Guillermo",
      sueldo:15000,
      activo:true
    },
    {
      id:5,
      nombre:"Leonel",
      sueldo:9000,
      activo:false
    },
    {
      id:6,
      nombre:"Efrain",
      sueldo:40000,
      activo:true
    },
    {
      id:7,
      nombre:"Raul",
      sueldo:5000,
      activo:true
    },
    {
      id:8,
      nombre:"Benjamin",
      sueldo:6000,
      activo:true
    },
    {
      id:9,
      nombre:"Aaron",
      sueldo:7000,
      activo:true
    },
    {
      id:10,
      nombre:"Alonso",
      sueldo:10000,
      activo:false
    },
  ]
}
