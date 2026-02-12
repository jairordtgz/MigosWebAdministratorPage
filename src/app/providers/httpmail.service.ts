import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpmailService {
  private baseURL = 'http://localhost:8000/Database/send_email/';
  constructor(
    private http: HttpClient) { }

  requestCall(datos: any){
    console.log(datos)
    return this.http.post(this.baseURL, datos);
  }
}
