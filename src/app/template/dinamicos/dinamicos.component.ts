import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('dinamicoForm') dinamicoForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  existeNombre(): boolean {
    return (
      this.dinamicoForm?.controls['nombre']?.invalid &&
      this.dinamicoForm?.controls['nombre']?.touched
    )
  }

  guardar() {
    console.log('formulario posteado');
  }
}
