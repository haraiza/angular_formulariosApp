import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    // Subscribe a todo
    // this.miFormulario.valueChanges.subscribe(form => {
    //   console.log(form);
    // })

    //Aqui se quitan las condiciones para no agregarlo a lo que realmente importa, persona
    // this.miFormulario.valueChanges.subscribe(({ condiciones, ...restoDeArgumentos }) => {
    //   this.persona = restoDeArgumentos;
    // })

    // Subscribe a un elemento en particular
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(form => {
    //   console.log(form);
    // })
  }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
    console.log(formValue);
  }

}
