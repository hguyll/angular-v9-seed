import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  versionNumber : string = '1.0.0';
  icon: string = 'assets/images/apple.png';
  logoAlt: string = 'FoodPlate logo';

  constructor() { }

  ngOnInit(): void { }

}
