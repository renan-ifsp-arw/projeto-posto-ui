import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FuncionarioRegisterComponent } from './funcionario-register/funcionario-register.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    FuncionarioRegisterComponent,
    FuncionarioListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    DropdownModule,
    TableModule,
    TooltipModule
  ],
  exports:[
    FuncionarioRegisterComponent
  ]
})
export class FuncionarioModule { }
