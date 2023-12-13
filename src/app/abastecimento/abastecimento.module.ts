import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbastecimentoRegisterComponent } from './abastecimento-register/abastecimento-register.component';
import { AbastecimentoListComponent } from './abastecimento-list/abastecimento-list.component';



@NgModule({
  declarations: [
    AbastecimentoRegisterComponent,
    AbastecimentoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbastecimentoModule { }
