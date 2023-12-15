import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bomba, User } from './../core/model';
import { AuthService } from '../security/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BombaService {
  bombaUrl = 'http://localhost:8080/bomba';
 
  
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  criarBomba(bomba: Bomba): Observable<Bomba> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<Bomba>(this.bombaUrl, bomba, { headers });
  }

  listBombas(): Observable<Bomba[]> {
    return this.http.get<Bomba[]>(this.bombaUrl);
  }


  updateBomba(bomba: Bomba): Observable<Bomba> {
    console.log(bomba)
    const url = `${this.bombaUrl}/recarregar/${bomba.id}`; // 
    return this.http.put<Bomba>(url, bomba)
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.bombaUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  recoverBombId(id: number): Promise<Bomba> {
    return this.http.get<Bomba>(`${this.bombaUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const bomba = response;
        return bomba;
      });
  }
}
