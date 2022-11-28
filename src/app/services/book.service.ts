import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  addBookUrl: string = "http://localhost:8080/management/api/v1/books/add";
  booksUrl: string = "http://localhost:8080/api/v1/books/";
  usersBooksUrl: string = "http://localhost:8080/management/api/v1/books"
  user: User;

  constructor(private http: HttpClient) { }

  addBook(book: Book): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(this.addBookUrl + "?appUsername=" + this.user.username, book, 
      {headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : localStorage.getItem('jwt') 
      }),
      observe: "response"});
  }

  getBooks(): Observable<any> {
    return this.http.get(this.booksUrl, {observe: "response"});
  }

  getBook(id: string): Observable<any> {
    return this.http.get(this.booksUrl + id, {observe: "response"});
  }

  getUsersBooks(): Observable<any> {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.http.get(this.usersBooksUrl + "?appUsername=" + this.user.username,
      {headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : localStorage.getItem('jwt') 
      }),
      observe: "response"});
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.usersBooksUrl + "/" + id, 
      {headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : localStorage.getItem('jwt') 
      }),
      observe: "response"});
  }

}
