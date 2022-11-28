import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UiService } from './services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {

  constructor(private uiService: UiService, private router: Router, private location: Location) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.uiService.getLoggedInState();
  }
  
}
