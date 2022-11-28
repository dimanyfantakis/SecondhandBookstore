import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlashMessagesModule } from 'flash-messages-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthFormComponent } from './components/navbar/auth-form/auth-form.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { ProfileComponent } from './components/users-profile/profile/profile.component';
import { AddBookComponent } from './components/users-profile/add-book/add-book.component';
import { LibraryComponent } from './components/bookstore/library/library.component';
import { BookComponent } from './components/bookstore/book/book.component';
import { BookstoreResultComponent } from './components/bookstore/bookstore-result/bookstore-result.component';
import { UsersBooksComponent } from './components/users-profile/users-books/users-books.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { PageUnsuccesfulPaymentComponent } from './components/pages/page-unsuccesful-payment/page-unsuccesful-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AuthFormComponent,
    LogoutComponent,
    ProfileComponent,
    AddBookComponent,
    LibraryComponent,
    BookComponent,
    BookstoreResultComponent,
    UsersBooksComponent,
    PageNotFoundComponent,
    PageUnsuccesfulPaymentComponent,
  ],
  entryComponents: [AuthFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FlashMessagesModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
