import { Funcionario } from './../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../clientes/cliente.service';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-funcionario-register',
  templateUrl:'./funcionario-register.component.html',
  styleUrls: ['./funcionario-register.component.css']
})
export class FuncionarioRegisterComponent {

  types = [
    { label: 'Frentista', value: 'FRENTISTA' },
    { label: 'Gerente', value: 'GERENTE' },
    { label: 'Caixa', value: 'CAIXA' },
    { label: 'Serviço Gerais', value: 'SERVIVO GERAIS'},
    { label: 'Segurança', value: 'SEGURANÇA'},
    { label: 'Atendente', value: 'ATENDENTE' },
    { label: 'Outro', value: 'OUTRO'}
  ];
  user = new Funcionario();
 
  }


