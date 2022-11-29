import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isUserValid(username: string, password: string) {
    return !(username && password);
  }

  isBookValid(price: number, selectedBook: Book) {
    return !(price && selectedBook);
  }
}
