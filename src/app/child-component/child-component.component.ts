import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output()
  login = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  loginOutput(login: boolean) {
    this.login.emit(login);
    console.log(login);
  }
}
