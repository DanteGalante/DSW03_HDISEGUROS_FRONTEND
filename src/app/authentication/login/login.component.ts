import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    if (this.form.valid && this.form.touched) {
      console.log('entro login')
      this.error = '';
      this.submitEM.emit(this.form.value);
      this.form.reset();
      Swal.fire(
        'Exito',
        'inicio correcto!',
        'success'
      )
      this.router.navigate(['hdi/reportes'])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión!'
      })
      this.error = 'Username or password invalid';
    }
  }
  error!: string | null;

  registro(){
    console.log('REgistro entro')
    this.router.navigate(['auth/registro'])
    
  }

  @Output() submitEM = new EventEmitter();
}
