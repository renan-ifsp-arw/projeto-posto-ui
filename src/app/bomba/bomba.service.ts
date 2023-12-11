import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bomba, User } from './../core/model';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BombaService {
  bombaUrl = 'http://localhost:8080/bomba';
  
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  add(bomba: Bomba): Promise<Bomba> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.bombaUrl, bomba, { headers })
      .toPromise();
  }

}
