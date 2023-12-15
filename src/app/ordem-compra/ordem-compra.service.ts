import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdemCompra } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {
  private ordemCompraUrl = 'http://localhost:8080/ordem-compra';

  constructor(private http: HttpClient) { }

  listAll(): Promise<OrdemCompra[]> {
    return this.http.get<OrdemCompra[]>(this.ordemCompraUrl)
      .toPromise()
      .then(response => response || []);
  }

  addOrdemCompra(ordemCompra: OrdemCompra): Promise<OrdemCompra> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post<OrdemCompra>(this.ordemCompraUrl, ordemCompra, { headers })
      .toPromise()
      .then(response => response as OrdemCompra);
  }

  remove(id: number): Promise<void> {
    return this.http.delete(`${this.ordemCompraUrl}/${id}`)
      .toPromise()
      .then(() => {});
  }

  update(ordemCompra: OrdemCompra): Promise<OrdemCompra> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put<OrdemCompra>(`${this.ordemCompraUrl}/${ordemCompra.id}`, ordemCompra, { headers })
      .toPromise()
      .then(response => response as OrdemCompra);
  }

  findById(id: number): Promise<OrdemCompra> {
    return this.http.get<OrdemCompra>(`${this.ordemCompraUrl}/${id}`)
      .toPromise()
      .then(response => response as OrdemCompra);
  }
}
