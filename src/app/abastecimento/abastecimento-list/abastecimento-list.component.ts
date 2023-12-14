import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { AbastecimentoService } from '../abastecimento.service';
import { Abastecimento } from 'src/app/core/model';

@Component({
  selector: 'app-abastecimento-list',
  templateUrl: './abastecimento-list.component.html',
  styleUrls: ['./abastecimento-list.component.css']
})
export class AbastecimentoListComponent implements OnInit {
  abastecimentos: Abastecimento[] = [];

  constructor(
    private abastecimentoService: AbastecimentoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private titleService: Title,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Listagem de Abastecimentos');
    this.listAll();
  }

  listAll(): void {
    this.abastecimentoService.listAll()
      .then(data => {
        this.abastecimentos = data;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  search(): void {
    // Implement your search logic here, for example:
    // this.abastecimentoService.search(this.searchFilters)
    //   .then(data => this.abastecimentos = data)
    //   .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(abastecimento: Abastecimento): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this abastecimento?',
      accept: () => {
        this.remove(abastecimento.id);
      }
    });
  }

  remove(id: number): void {
    this.abastecimentoService.remove(id)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Abastecimento deleted successfully!' });
        this.listAll(); // Refresh the list after deletion
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
