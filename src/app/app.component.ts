import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondhand-bookstore';

  constructor(private router: Router) { }

  addBook() {
    this.router.navigate(['/addBook']);
  }

  viewBooks() {
    this.router.navigate(['/myBooks']);
  }
}
