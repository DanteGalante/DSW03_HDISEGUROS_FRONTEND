import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  /** Validaciones de campos vacíos para el form de login */
  form: FormGroup = new FormGroup({
    Telefono: new FormControl('', [Validators.nullValidator]),
    NombreUsuario: new FormControl('', [Validators.nullValidator]),
    Contrasenia: new FormControl('', [Validators.nullValidator]),
    radio: new FormControl('', [Validators.required]),
    
  });
  seleccionado: any;
  valor: any;

  /** Variable donde se almacenará el id del usuario para obtener su información de sesión */
  public idUsuarioLogueado: any;


  /** Constructor */
  constructor(private router: Router,
              private authService: AuthService,
              private http:HttpClient) { 
                this.http.post
              }

  login() {

    this.authService.login(this.idUsuarioLogueado)
      .subscribe( resp => {
      })
    //this.router.navigate(['auth/registro'])
  }

  ngOnInit(): void {
  }
  

  /** Submit o envío del form */
  submit() {
    if (this.form.valid && this.form.touched) {
      this.error = '';
      this.submitEM.emit(this.form.value);
  
      
      /** Método login con autenticación */

      if(this.valor == 1){
        this.validarConductor();
      }

      if(this.valor == 2){
        this.validarUsuario();
      }

      



      

      /** Te envía a la ventana Home del usuario */


      //this.router.navigate(['hdi/'])



      this.form.reset();
    } else {
      
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

  validarUsuario(){
    var val={
      NombreUsuario:this.form.value.NombreUsuario,
      Contrasenia:this.form.value.Contrasenia
    };


    this.http.post(environment.API_URL+'loginusuario', val)
    .subscribe((res: any)=>{
      alert(res.toString());
      /** Regresa el id del usuario para usar de parametro en authService.login() */
      this.idUsuarioLogueado = res['idUsuario'];

    if(res['idUsuario'] != undefined){
      this.authService.login(this.idUsuarioLogueado.toString())
      .subscribe( resp => {

        if (resp.idUsuario) {
          this.router.navigate(['hdi/'])
        }


      })
      Swal.fire(
        'Exito',
        'inicio correcto!',
        'success'
      )
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión!'
      })
    }

      
    });
  }

  validarConductor(){
    var val={
      Telefono:this.form.value.Telefono,
      Contrasenia:this.form.value.Contrasenia
    };


    this.http.post(environment.API_URL+'loginconductor', val)
    .subscribe((res: any)=>{
      alert(res.toString());
      /** Regresa el id del usuario para usar de parametro en authService.login() */
      this.idUsuarioLogueado = res['idUsuario'];

    if(res['idUsuario'] != undefined){
      this.authService.login(this.idUsuarioLogueado.toString())
      .subscribe( resp => {

        if (resp.idUsuario) {
          this.router.navigate(['hdi/'])
        }


      })
      Swal.fire(
        'Exito',
        'inicio correcto!',
        'success'
      )
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión!'
      })
    }

      
    });
  }


  @Output() submitEM = new EventEmitter();
}
