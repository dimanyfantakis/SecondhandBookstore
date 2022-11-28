import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() onLogout: EventEmitter<any> = new EventEmitter();
  @Output() onAddBook: EventEmitter<any> = new EventEmitter();
  @Output() onViewBooks: EventEmitter<any> = new EventEmitter();
  username: string;

  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('user')).username;
  }

  logout() {
    this.onLogout.emit();
  }

  addBook() {
    this.onAddBook.emit();
  }

  viewBooks() {
    this.onViewBooks.emit();
  }
}
