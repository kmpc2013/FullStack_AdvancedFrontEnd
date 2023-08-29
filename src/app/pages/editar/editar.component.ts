import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  user: User = new User()
  addressForm = this.fb.group({
    id: '',
    company: null,
    firstName: [null, Validators.compose([
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(70)
    ])],
    email: [null, Validators.compose([
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(50),
      Validators.email
    ])],
    phone: [null, Validators.required],  
    password: [null, Validators.required]
  });
  email = this.addressForm.controls['email'];
  getErrorMessage(){
      if(this.email.hasError('required')){
        return "O email é obrigatório"
      }
      return this.email.hasError('email') ? "Voce deve preencher um email valido" : "";
  }

  constructor(private fb: FormBuilder) {}
  
  onSubmit(): void {
    this.user.id = '1';
    
    if(this.addressForm.controls['firstName'].value)
    this.user.firstName = this.addressForm.controls['firstName'].value;
    
    if(this.addressForm.controls['email'].value)
    this.user.email = this.addressForm.controls['email'].value;

    if(this.addressForm.controls['phone'].value)
    this.user.phone = this.addressForm.controls['phone'].value;

    if(this.addressForm.controls['password'].value)
    this.user.password = this.addressForm.controls['password'].value;
    
    alert('Entrou no onSubmit!');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}