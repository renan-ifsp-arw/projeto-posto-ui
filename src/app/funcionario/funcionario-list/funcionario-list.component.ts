import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from 'src/app/core/model';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})

export class FuncionarioListComponent {
  header = "Posto-Ui-Funcionario"

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService:FuncionarioService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService){ }

    ngOnInit(): void {
      this.title.setTitle('Listagem de Funcionários');
      this.list();
    }
  
    list(): void {
      this.funcionarioService.listFuncionario()
        .then(result => {
          this.funcionarios =  result;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    confirmRemoval(funcionario: Funcionario): void {
      this.confirmation.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.remove(funcionario);
        }
      });
    }
  
    remove(funcionario: Funcionario): void {
      this.funcionarioService.remove(funcionario.id)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Funcionario excluída com sucesso!' });
      })
      .catch(error => this.errorHandler.handle(error));
    }
  
}
