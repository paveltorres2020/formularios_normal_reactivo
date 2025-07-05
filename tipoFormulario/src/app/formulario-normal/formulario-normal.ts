import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-formulario-normal',
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {
nombre= '';

 enviar() {
    alert('Formulario enviado con nombre: ' + this.nombre);
  }
}