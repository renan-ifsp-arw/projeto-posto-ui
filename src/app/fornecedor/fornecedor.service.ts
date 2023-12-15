import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fornecedor } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private fornecedorUrl = 'http://localhost:8080/fornecedor';

  constructor(private http: HttpClient) { }

  listAll(): Promise<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedorUrl)
      .toPromise()
      .then(response => response || []);
  }

  addFornecedor(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post<Fornecedor>(this.fornecedorUrl, fornecedor, { headers })
      .toPromise()
      .then(response => response as Fornecedor);
  }

  remove(id: number): Promise<void> {
    return this.http.delete(`${this.fornecedorUrl}/${id}`)
      .toPromise()
      .then(() => {});
  }

  update(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put<Fornecedor>(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, { headers })
      .toPromise()
      .then(response => response as Fornecedor);
  }

  findById(id: number): Promise<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.fornecedorUrl}/${id}`)
      .toPromise()
      .then(response => response as Fornecedor);
  }
}
