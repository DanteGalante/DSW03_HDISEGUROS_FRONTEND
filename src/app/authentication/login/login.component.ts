import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  submit() {
    if (this.form.valid && this.form.touched) {
      this.error = '';
      this.submitEM.emit(this.form.value);
      this.form.reset();
    } else {
      this.error = 'Username or password invalid';
    }
  }
  error!: string | null;

  @Output() submitEM = new EventEmitter();
}
