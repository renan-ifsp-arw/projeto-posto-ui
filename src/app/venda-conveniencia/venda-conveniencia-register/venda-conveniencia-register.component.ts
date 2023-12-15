import { Component } from '@angular/core';
import { VendaConveniencia, Cliente } from '../../core/model';
import { ClienteService } from '../../cliente/cliente.service';
import { VendaConvenienciaService } from '../venda-conveniencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-venda-conveniencia-register',
  templateUrl: './venda-conveniencia-register.component.html',
  styleUrls: ['./venda-conveniencia-register.component.css']
})
export class VendaConvenienciaRegisterComponent {
  vendaConveniencia: VendaConveniencia = new VendaConveniencia();
  clientes: Cliente[] = [];

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private vendaConvenienciaService: VendaConvenienciaService
  ) { }

  ngOnInit(): void {
    this.loadClientes();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vendaConvenienciaService.findById(Number(id)).then(data => this.vendaConveniencia = data);
    }
  }

  saveVendaConveniencia() {
    const operationPromise = this.vendaConveniencia.id
      ? this.vendaConvenienciaService.update(this.vendaConveniencia)
      : this.vendaConvenienciaService.addVendaConveniencia(this.vendaConveniencia);

    operationPromise.then(
      () => {
        this.router.navigate(['/venda-conveniencia']);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Venda Conveniência salva com sucesso!' });
      },
      error => {
        console.error('Error saving venda conveniência:', error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar venda conveniência' });
      }
    );
  }

  private loadClientes() {
    this.clienteService.listClientes()
      .subscribe(clientes => this.clientes = clientes);
  }
}
