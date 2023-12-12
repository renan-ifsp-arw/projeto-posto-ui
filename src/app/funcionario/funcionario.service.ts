import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Funcionario } from './../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  bombaUrl = 'http://localhost:8080/funcionario';
  
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }


  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Funcionario>(this.bombaUrl, funcionario, { headers });
  }
}
