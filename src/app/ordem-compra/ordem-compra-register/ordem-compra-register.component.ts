import { Component } from '@angular/core';
import { OrdemCompra, Fornecedor, TipoOrdem } from '../../core/model';
import { FornecedorService } from '../../fornecedor/fornecedor.service';
import { OrdemCompraService } from '../ordem-compra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ordem-compra-register',
  templateUrl: './ordem-compra-register.component.html',
  styleUrls: ['./ordem-compra-register.component.css']
})
export class OrdemCompraRegisterComponent {
  ordemCompra: OrdemCompra = new OrdemCompra();
  fornecedores: Fornecedor[] = [];
  tiposOrdem = Object.entries(TipoOrdem).map(([key, value]) => ({ label: key, value: value }));

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private fornecedorService: FornecedorService,
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {
    this.loadFornecedores();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ordemCompraService.findById(Number(id)).then(data => this.ordemCompra = data);
    }
  }

  saveOrdemCompra() {
    const operationPromise = this.ordemCompra.id
      ? this.ordemCompraService.update(this.ordemCompra)
      : this.ordemCompraService.addOrdemCompra(this.ordemCompra);

    operationPromise.then(
      () => {
        this.router.navigate(['/ordem-compra']);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Ordem de Compra salva com sucesso!' });
      },
      error => {
        console.error('Error saving ordem de compra:', error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar ordem de compra' });
      }
    );
  }

  private loadFornecedores() {
    this.fornecedorService.listAll()
      .then(fornecedores => this.fornecedores = fornecedores);
  }
}
