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

  constructor(private abastecimentoService: AbastecimentoService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private title: Title,
              public auth: AuthService) { }

  ngOnInit(): void {
    this.title.setTitle('Listagem de Abastecimentos');
    this.listAll();
  }

  listAll(): void {
    this.abastecimentoService.listAll()
      .then(data => {
        this.abastecimentos = data;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  // Include other necessary methods like confirmRemoval, remove, etc.
}
