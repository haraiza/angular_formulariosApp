import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  @ViewChild('dinamicoForm') dinamicoForm!: NgForm;

  persona: Persona = {
    nombre: 'Humberto',
    favoritos: [
      { id: 1, nombre: "Skyrim" },
      { id: 2, nombre: "Mario 64" },
      { id: 3, nombre: "Dragon Quest VIII" },
    ]
  }




  // existeNombre(): boolean {
  //   return (
  //     this.dinamicoForm?.controls['nombre']?.invalid &&
  //     this.dinamicoForm?.controls['nombre']?.touched
  //   )
  // }

  guardar() {
    console.log('formulario posteado');
  }
}
