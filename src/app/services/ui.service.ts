import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private loggedIn: boolean = false;
  private subject = new Subject<boolean>();

  constructor() { }

  toggleLog(): void {
    this.loggedIn = !this.loggedIn;
    this.subject.next(this.loggedIn);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  getLoggedInState(): boolean {
    return this.loggedIn;
  }
}
