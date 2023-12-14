import { Funcionario } from 'src/app/core/model';
import { FuncionarioService } from './../funcionario.service';
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
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const funcionarioId = this.route.snapshot.params['id'];
    if (funcionarioId) {
      this.loadFuncionario(funcionarioId);
    }
  }

  loadFuncionario(id: number) {
    this.funcionarioService.recoverFuncionarioId(id)
      .then(funcionario => {
        this.funcionario = funcionario;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  addFuncionario() {

    const funcionarioId = this.funcionario.id;


    if(funcionarioId != null){

      this.funcionarioService.updateFuncionario(this.funcionario)
      .subscribe(
        response => {
          this.funcionario = response;
          this.messageService.add({ severity: 'success', detail: 'Funcionário editada com sucesso!' });
        },
        error => this.errorHandler.handle(error)
      );

    }else{
      this.funcionarioService.criarFuncionario(this.funcionario).subscribe(
        (resposta: any) => {
          this.messageService.add({ severity: 'success', detail: 'Funcionário cadastrada com sucesso!' });
        },
        (erro: any) => {
          console.error('Erro ao cadastrar Funcionario:', erro);
        }
      );
    }
  }
 
}

