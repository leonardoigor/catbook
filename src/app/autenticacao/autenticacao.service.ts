import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpclient: HttpClient) { }

  autenticar(userName: string, password: string): Observable<any> {
    return this.httpclient.post("http://localhost:3000/user/login", { userName, password })
  }
}
