import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { MatDialog } from '@angular/material';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from 'src/app/models/User';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onAddBook: EventEmitter<any> = new EventEmitter();
  @Output() onViewBooks: EventEmitter<any> = new EventEmitter();
  
  loggedIn: boolean;
  subscription: Subscription;
  registerFormType: string = "Register";
  loginFormType: string = "Login";
  username: string = "";
  password: string = "";

  constructor(private uiService: UiService, private authService: AuthService, private dialog: MatDialog, 
    private flashMessage: FlashMessagesService) { 
    this.subscription = uiService.onToggle().subscribe(
      (value) => this.loggedIn = value
    );
  }

  ngOnInit() {
  }

  openRegisterForm(): void {

    const dialogRef = this.dialog.open(AuthFormComponent, {height: '550px', width: '350px', disableClose: true,
    data: {formType: this.registerFormType, username: this.username, password: this.password}});

    dialogRef.afterClosed().subscribe(res => {
      if (res == false) {
        this.resetFormFields();
        return;
      }
      if (!(res.username && res.password)) {
        this.flashMessage.show('Username and password are required', {timeout: 3000});
        this.resetFormFields();
        return;
      }

      const newUser = {
        username: res.username,
        password: res.password
      }

      this.register(newUser).subscribe(registerResponse => {
        this.login(newUser).subscribe(loginResponse => {
          this.authService.setUserData(newUser, loginResponse.headers.get('authorization').toString());
          this.uiService.toggleLog();
        },
        error => {
          console.log(error);
        });
      },
      error => {
        if (error.status == 500) {
          this.flashMessage.show('A user with that username already exists!', {timeout: 3000});
        }
        this.resetFormFields();
        console.log(error);
      });
    })
  }

  openLoginForm(): void {
    const dialogRef = this.dialog.open(AuthFormComponent, {height: '550px', width: '350px', disableClose: true,
    data: {formType: this.loginFormType, username: this.username, password: this.password}});

    dialogRef.afterClosed().subscribe(res => {
      if (res == false) {
        this.resetFormFields();
        return;
      }
      if (!(res.username && res.password)) {
        this.flashMessage.show('Username and password are required', {timeout: 3000});
        return;
      }
      this.username = res.username;
      this.password = res.password;

      const newUser = {
        username: res.username,
        password: res.password
      }
      
      this.login(newUser).subscribe(loginResponse => {
        this.authService.setUserData(newUser, loginResponse.headers.get('authorization').toString());
        this.uiService.toggleLog();
      },
      error => {
        console.log(error);
        this.flashMessage.show('A user with that username and password does not exist', {timeout: 3000});
        this.resetFormFields();
      });
      
    })
  }

  register(newUser: User): Observable<any> {
    return this.authService.registerUser(newUser);
  }

  login(newUser: User) {
    return this.authService.loginUser(newUser);
  }

  logout() {
    this.authService.logout();
    this.uiService.toggleLog();
    this.resetFormFields();
  }

  addBook() {
    this.onAddBook.emit();
  }

  viewBooks() {
    this.onViewBooks.emit();
  }

  resetFormFields() {
    this.username = "";
    this.password = "";
  }
}
