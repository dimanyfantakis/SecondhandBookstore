import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment: Payment;

  constructor(private http: HttpClient) { }

  charge(payment: Payment) {
    return this.http.post('http://localhost:8080/payment/charge', payment,
     {headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : localStorage.getItem('jwt') 
      })})
  }
}
