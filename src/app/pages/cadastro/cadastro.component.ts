import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  addressForm = this.fb.group({
    id: '',
    company: null,
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(70)])
    ],
    email: [null, Validators.required],
    phone: [null, Validators.required],  
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Entrou no onSubmit!');
  }
}
