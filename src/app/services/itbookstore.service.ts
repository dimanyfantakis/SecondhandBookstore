import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItBookstoreService {
  searchUrl: string = "https://api.itbook.store/1.0/search/"

  constructor(private http: HttpClient) { }

  searchBook(query: string): Observable<any> {
    return this.http.get<any>(this.searchUrl + query);
  }
}
