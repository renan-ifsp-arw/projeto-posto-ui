import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    { label: 'FRENTISTA', value: 'FRENTISTA' },
    { label: 'GERENTE', value: 'GERENTE' },
    { label: 'CAIXA', value: 'CAIXA' },
    { label: 'SERVIVO GERAIS', value: 'SERVIVO GERAIS'},
    { label: 'SEGURANCA', value: 'SEGURANCA'},
    { label: 'ATENDENTE', value: 'ATENDENTE' },
    { label: 'OUTRO', value: 'OUTRO'}
  ];
  funcionario = new Funcionario();
  constructor(
    private funcionarioService: FuncionarioService,        
    private messageService: MessageService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService
  ){}

  addFuncionario() {
    this.funcionarioService.criarFuncionario(this.funcionario).subscribe(
      (resposta: any) => {
        console.log('Funcionario cadastrada com sucesso!', resposta);
      },
      (erro: any) => {
        console.error('Erro ao cadastrar Funcionario:', erro);
      }
    );
  }
 
  }


