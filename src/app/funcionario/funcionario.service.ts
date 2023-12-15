import { Funcionario } from 'src/app/core/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarioUrl = 'http://localhost:8080/funcionario';
  
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }


  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Funcionario>(this.funcionarioUrl, funcionario, { headers });
  }

  listFuncionario(): Promise<any> {
    return this.http.get(`${this.funcionarioUrl}`)
    .toPromise()
     .then(response => {
              console.log("response ", response)
              return response;
    });
  }

  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    console.log(funcionario)
    const url = `${this.funcionarioUrl}/${funcionario.id}`; // 
    return this.http.put<Funcionario>(url, funcionario)
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.funcionarioUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }
  
  recoverFuncionarioId(id: number): Promise<Funcionario> {
    return this.http.get<Funcionario>(`${this.funcionarioUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const funcionario = response;
        return funcionario;
      });
  }

}
