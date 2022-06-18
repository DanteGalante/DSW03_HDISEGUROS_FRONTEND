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


  /** Validaciones de campos vacíos para el form de login */
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    radio: new FormControl('', [Validators.required]),
    
  });
  seleccionado: any;
  valor: any;


  /** Constructor */
  constructor(private router: Router) { }

  login() {
    this.router.navigate(['auth/registro'])
  }

  ngOnInit(): void {
  }
  

  /** Submit o envío del form */
  submit() {
    console.log('resul', this.form.value.username)
    if (this.form.valid && this.form.touched) {
      console.log('entró al login')
      this.error = '';
      this.submitEM.emit(this.form.value);
  
      Swal.fire(
        'Exito',
        'inicio correcto!',
        'success'
      )
      /** Te envía a la ventana Home del usuario */
      this.router.navigate(['hdi/'])
      this.form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión!'
      })
      this.error = 'Usuario o contraseña inválido';
    }
  }
  error!: string | null;

  /** Ir al registro de un nuevo usuario */
  registro(){
    this.router.navigate(['auth/registro'])
    
  }
  /** Cambia el login de conductor a rol de empleado y viceversa */
  changeComboo(event: any) {
    this.valor = event.value
    console.log('e', this.valor)
    console.log('changed', event && event.value);
  }

  @Output() submitEM = new EventEmitter();
}
