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
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(50),
      Validators.email
    ])],
    password: [null, Validators.compose([
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(50)
    ])],
  });
  email = this.addressForm.controls['email'];
  getErrorMessage(){
      if(this.email.hasError('required')){
        return "O email é obrigatório"
      }
      return this.email.hasError('email') ? "Voce deve preencher um email valido" : "";
  }

  constructor(private fb:FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }


}
