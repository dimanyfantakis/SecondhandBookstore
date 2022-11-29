import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { ItBookstoreService } from 'src/app/services/itbookstore.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title: string;
  author: string;
  price: number;
  subtitle: string;
  image: string;
  searchString: string;
  bookstoreResults: any;
  selectedBook: Book;

  constructor(private bookService: BookService, private itBookstoreService: ItBookstoreService, 
    private flashMessage: FlashMessagesService, private validationService: ValidationService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.validationService.isBookValid(this.price, this.selectedBook)) {
      this.flashMessage.show('You need to select a book and define a price for it in order to sell it!',
        {timeout: 3000});
    }
    
    const newBook = {
      title: this.selectedBook.title,
      author: this.author,
      description: this.selectedBook.subtitle,
      price: this.price,
      image: this.selectedBook.image
    }

    this.addBook(newBook);
    this.title = "";
    this.author = "";
    this.price = null;
    this.subtitle = "";
    this.image = "";
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe(() => {
    },
    error => {
      console.log(error);
    });
  }

  searchBook() {
    this.itBookstoreService.searchBook(this.searchString).subscribe(res =>  {
      this.bookstoreResults = res.books;

    },
    error => {
      console.log(error);
    });
  }

  selectBook(book: Book) {
    this.selectedBook = book;
    this.searchString = "";
  }

}
