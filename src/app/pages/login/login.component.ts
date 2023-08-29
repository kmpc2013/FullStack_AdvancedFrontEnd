import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    ],
  });

  constructor(private fb:FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }


}
