import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasComponent } from "./directivas/directivas.component";
import { EncabezadoComponent } from "./encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DirectivasComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio 14 - @if y @for';
}
