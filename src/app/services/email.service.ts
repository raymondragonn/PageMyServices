import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env/env';

const BASE_URL = environment.apiLocal;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(`${BASE_URL}`, data);
  }
}
