import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() onLogout: EventEmitter<any> = new EventEmitter();
  faRightFromBracket = faRightFromBracket;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.onLogout.emit();
  }

}
