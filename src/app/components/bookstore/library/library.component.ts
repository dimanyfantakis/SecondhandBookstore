import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { Payment } from 'src/app/models/Payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];
  book: Book;
  payment: Payment;
  stripe = loadStripe(environment.stripePK);

  constructor(private bookService: BookService, private router: Router, 
    private paymentService: PaymentService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((res) =>
      {
        this.books = res.body;
      },
      error => {
        console.log(error);
      });
  }

  showInfo(id: string): void {
    this.router.navigate(['/book/' + id]);
  }

  async buyBook(id: string) {
    this.bookService.getBook(id).subscribe(async res => {
      this.book = res.body;

      this.payment = {
        name: this.book.title,
        currency: 'usd',
        amount: this.book.price * 100,
        quantity: 1,
        imageUrl: this.book.image,
        cancelUrl: 'http://localhost:4200/unsuccesfullPayment',
        successUrl: 'http://localhost:4200/',
      };

      const stripe = await this.stripe;

      this.paymentService.charge(this.payment).subscribe((res: any) => {
        stripe.redirectToCheckout({
          sessionId: res.id
        });

        this.bookService.deleteBook(parseInt(id)).subscribe(res => {
          this.books = this.books.filter((b) => b.id !== parseInt(id));
        }, 
        error => {
          console.log(error);
        })
      });
    },
    error => {
      console.log(error);
    });
  }

}
