import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-bookstore-result',
  templateUrl: './bookstore-result.component.html',
  styleUrls: ['./bookstore-result.component.css']
})
export class BookstoreResultComponent implements OnInit {
  @Input() book: Book;
  @Output() onBookSelect: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chooseBook() {
    const newBook = {
      title: this.book.title,
      imageUrl: this.book.image,
      description: this.book.description
    }
    this.onBookSelect.emit(this.book);
  }

}
