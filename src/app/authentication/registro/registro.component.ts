import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  form: FormGroup = new FormGroup({
    licencia: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {
    console.log('resul', this.form.value)
    if (this.form.valid && this.form.touched) {
      console.log('entro login')
      this.error = '';
      this.submitEM.emit(this.form.value);
      this.form.reset();
      Swal.fire(
        'Exito',
        'Registro guardado con exito!',
        'success'
      )
      this.router.navigate(['auth'])

    } else {
      Swal.fire(
        'exit',
        'Registro cancelado!',
        'error'
      )
      this.error = 'Falta algun dato';
    }
  }
  error!: string | null;

  cancelar(){ 
     this.router.navigate(['auth'])
  }

  registro(){
    console.log('REgistro entro')
    this.router.navigate(['auth/registro'])
    
  }

  @Output() submitEM = new EventEmitter();

}
