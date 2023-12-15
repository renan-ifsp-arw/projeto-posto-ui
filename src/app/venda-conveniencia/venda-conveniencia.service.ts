import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { VendaConveniencia } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class VendaConvenienciaService {
  private vendaConvenienciaUrl = 'http://localhost:8080/venda-conveniencia'; // Update the URL

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  listAll(): Promise<VendaConveniencia[]> {
    return this.http.get<VendaConveniencia[]>(this.vendaConvenienciaUrl)
      .toPromise()
      .then(response => response || []);
  }

  addVendaConveniencia(vendaConveniencia: VendaConveniencia): Promise<VendaConveniencia> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post<VendaConveniencia>(this.vendaConvenienciaUrl, vendaConveniencia, { headers })
      .toPromise()
      .then(response => response as VendaConveniencia); // Cast response to VendaConveniencia
  }

  remove(id: number): Promise<void> {
    return this.http.delete(`${this.vendaConvenienciaUrl}/${id}`)
      .toPromise()
      .then(() => {});
  }

  update(vendaConveniencia: VendaConveniencia): Promise<VendaConveniencia> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put<VendaConveniencia>(`${this.vendaConvenienciaUrl}/${vendaConveniencia.id}`, vendaConveniencia, { headers })
      .toPromise()
      .then(response => response as VendaConveniencia);
  }

  findById(id: number): Promise<VendaConveniencia> {
    return this.http.get<VendaConveniencia>(`${this.vendaConvenienciaUrl}/${id}`)
      .toPromise()
      .then(response => response as VendaConveniencia);
  }
}
