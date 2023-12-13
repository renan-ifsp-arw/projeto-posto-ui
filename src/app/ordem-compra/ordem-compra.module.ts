import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemCompraRegisterComponent } from './ordem-compra-register/ordem-compra-register.component';
import { OrdemCompraListComponent } from './ordem-compra-list/ordem-compra-list.component';



@NgModule({
  declarations: [
    OrdemCompraRegisterComponent,
    OrdemCompraListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdemCompraModule { }
