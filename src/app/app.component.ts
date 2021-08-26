import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-v9-seed';
  user = {id:1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs:{}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true, email: 'kevin@kevinruse.com'};
  loggedIn: boolean;
  stylePreference: String;

  logIn(evt) {
   console.log(evt);
   this.loggedIn = evt;
  }

  setStylePreference(value: String) {
    this.stylePreference = value;
  }
  
  setImportance() {
    if(this.stylePreference === 'hilite') {
      return {
        'background-color': 'yellow'
      }
    } else if(this.stylePreference === 'caps') {
      return {
        'text-transform': 'uppercase'
      }
    }
  }
}
