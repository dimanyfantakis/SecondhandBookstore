import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/users-profile/add-book/add-book.component';
import { BookComponent } from './components/bookstore/book/book.component';
import { LibraryComponent } from './components/bookstore/library/library.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { PageUnsuccesfulPaymentComponent } from './components/pages/page-unsuccesful-payment/page-unsuccesful-payment.component';
import { UsersBooksComponent } from './components/users-profile/users-books/users-books.component';
import { MemberGuard } from './member.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: LibraryComponent},
  { 
    path: 'addBook',
    component: AddBookComponent,
    canActivate: [MemberGuard]
  },
  { 
    path: 'myBooks',
    component: UsersBooksComponent,
    canActivate: [MemberGuard]
  },
  { path: 'book/:id', component: BookComponent},
  { path: 'unsuccesfullPayment', component: PageUnsuccesfulPaymentComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
