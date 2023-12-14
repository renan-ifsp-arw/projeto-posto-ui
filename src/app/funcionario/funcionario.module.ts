import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FuncionarioRegisterComponent } from './funcionario-register/funcionario-register.component';



@NgModule({
  declarations: [
    FuncionarioRegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    DropdownModule 
  ],
  exports:[
    FuncionarioRegisterComponent
  ]
})
export class FuncionarioModule { }
