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
}
