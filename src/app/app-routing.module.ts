import {ClienteRegisterComponent} from './cliente/cliente-register/cliente-register.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientesListComponent} from './cliente/cliente-list/clientes-list.component';
import {LoginFormComponent} from './security/login-form/login-form.component';
import {UserRegisterComponent} from './users/user-register/user-register.component';
import { FuncionarioRegisterComponent } from './funcionario/funcionario-register/funcionario-register.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { BombaRegisterComponent } from './bomba/bomba-register/bomba-register.component';
import { BombaListComponent } from './bomba/bomba-list/bomba-list.component';
import {PageNotFoundComponent} from './core/page-not-found.component';
import {NotAuthorizedComponent} from './core/not-authorized.component';
import {AuthGuard} from './security/auth.guard';
import {AbastecimentoRegisterComponent} from "./abastecimento/abastecimento-register/abastecimento-register.component";
import {
  VendaConvenienciaRegisterComponent
} from "./venda-conveniencia/venda-conveniencia-register/venda-conveniencia-register.component";
import {OrdemCompraRegisterComponent} from "./ordem-compra/ordem-compra-register/ordem-compra-register.component";
import {AbastecimentoListComponent} from "./abastecimento/abastecimento-list/abastecimento-list.component";
import {
  VendaConvenienciaListComponent
} from "./venda-conveniencia/venda-conveniencia-list/venda-conveniencia-list.component";
import {OrdemCompraListComponent} from "./ordem-compra/ordem-compra-list/ordem-compra-list.component";

const routes: Routes = [

  //{ path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'cliente/:id',
    component: ClienteRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ABASTECIMENTO', 'ROLE_CONVENIENCIA', 'ROLE_GERENCIA']}
  },
  {
    path: 'cliente',
    component: ClientesListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ABASTECIMENTO', 'ROLE_CONVENIENCIA', 'ROLE_GERENCIA']}
  },
  {
    path: 'cliente/new',
    component: ClienteRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_ABASTECIMENTO', 'ROLE_CONVENIENCIA', 'ROLE_GERENCIA']}
  },
  {
    path: 'users/new',
    component: UserRegisterComponent,

  },

  { path: 'login', component: LoginFormComponent },
  { path: 'funcionario', component: FuncionarioListComponent },
  { path: 'funcionario/new', component: FuncionarioRegisterComponent },
  { path: 'funcionario/:id', component: FuncionarioRegisterComponent},
  { path: 'bomba', component: BombaListComponent },
  { path: 'bomba/new', component: BombaRegisterComponent },
  { path: 'bomba/:id', component: BombaRegisterComponent },

  { path: 'abastecimento', component: AbastecimentoListComponent },
  { path: 'abastecimento/new', component: AbastecimentoRegisterComponent },
  { path: 'abastecimento/:id', component: AbastecimentoRegisterComponent },

  { path: 'ordem-compra', component: OrdemCompraListComponent },
  { path: 'ordem-compra/new', component: OrdemCompraRegisterComponent },
  { path: 'ordem-compra/:id', component: OrdemCompraRegisterComponent },

  { path: 'venda-conveniencia', component: VendaConvenienciaListComponent },
  { path: 'venda-conveniencia/new', component: VendaConvenienciaRegisterComponent },
  { path: 'venda-conveniencia/:id', component: VendaConvenienciaRegisterComponent },

/*  { path: 'fornecededores', component: VendaConvenienciaListComponent },
  { path: 'fornecededores/new', component: VendaConvenienciaRegisterComponent },
  { path: 'fornecededores/:id', component: VendaConvenienciaRegisterComponent },*/

  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent }, // pagina-nao-encontrada
  { path: '**', redirectTo: 'page-not-found' } // importante que seja a última rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
