import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Abastecimento } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AbastecimentoService {
  private abastecimentoUrl = 'http://localhost:8080/abastecimento';

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  listAll(): Promise<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(this.abastecimentoUrl)
      .toPromise()
      .then(response => response || []);
  }

  addAbastecimento(abastecimento: Abastecimento): Promise<Abastecimento> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post<Abastecimento>(this.abastecimentoUrl, abastecimento, { headers })
      .toPromise()
      .then(response => response as Abastecimento); // Cast response to Abastecimento
  }


  remove(id: number): Promise<void> {
    return this.http.delete(`${this.abastecimentoUrl}/${id}`)
      .toPromise()
      .then(() => {});
  }


  update(abastecimento: Abastecimento): Promise<Abastecimento> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put<Abastecimento>(`${this.abastecimentoUrl}/${abastecimento.id}`, abastecimento, { headers })
      .toPromise()
      .then(response => response as Abastecimento);
  }


  findById(id: number): Promise<Abastecimento> {
    return this.http.get<Abastecimento>(`${this.abastecimentoUrl}/${id}`)
      .toPromise()
      .then(response => response as Abastecimento);
  }
}
