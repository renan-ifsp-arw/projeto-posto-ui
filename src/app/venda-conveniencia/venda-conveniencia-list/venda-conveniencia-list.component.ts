import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { VendaConvenienciaService } from '../venda-conveniencia.service';
import { VendaConveniencia } from 'src/app/core/model';

@Component({
  selector: 'app-venda-conveniencia-list',
  templateUrl: './venda-conveniencia-list.component.html',
  styleUrls: ['./venda-conveniencia-list.component.css']
})
export class VendaConvenienciaListComponent implements OnInit {
  vendasConveniencia: VendaConveniencia[] = [];

  constructor(
    private vendaConvenienciaService: VendaConvenienciaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private titleService: Title,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Listagem de Vendas Conveniência');
    this.listAll();
  }

  listAll(): void {
    this.vendaConvenienciaService.listAll()
      .then(data => {
        this.vendasConveniencia = data;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(vendaConveniencia: VendaConveniencia): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this abastecimento?',
      accept: () => {
        this.remove(vendaConveniencia.id);
      }
    });
  }

  remove(id: number): void {
    this.vendaConvenienciaService.remove(id)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Venda Conveniencia deleted successfully!' });
        this.listAll();
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
