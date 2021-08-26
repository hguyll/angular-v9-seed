import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
        'userName' : [null, [Validators.required, Validators.maxLength(5)]],
      });
    this.userName = this.loginForm.controls['userName'];
  }

  log(val) {
    console.log(val);
  }

  onSubmit(form: any) {
    console.log('You submitted the form: ');
    console.log(form);
  }

  ngOnInit(): void { }

}
