import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-users-books',
  templateUrl: './users-books.component.html',
  styleUrls: ['./users-books.component.css']
})
export class UsersBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getUsersBooks().subscribe((res) =>
      {
        this.books = res.body;
      },
      error => {
        console.log(error);
      });
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe((res) =>
      {
        this.books = this.books.filter((b) => b.id !== bookId);
      },
      error => {
        console.log(error);
      });
  }

}
