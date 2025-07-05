import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {
form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    alert('Correo enviado: ' + this.form.value.correo);
  }
}