import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  form: FormGroup = new FormGroup({
    NombreCompleto: new FormControl('', [Validators.required]),
    FechaNacimiento: new FormControl('', [Validators.required]),
    Contrasenia: new FormControl('', [Validators.required]),
    idTipoUsuario: new FormControl('', [Validators.required]),
    Telefono: new FormControl('', [Validators.required]),
    NumeroLicencia: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private http:HttpClient) { 
    this.http.post
  }

   

  users:any=[];

  modalTitle ="";
  nombreCompleto = "";
  fechaNacimiento = new Date();
  contrasenia = "";
  idTipoUsuario = 0;
  telefono = "";
  numeroLicencia = "";
  


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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al registrar!'
      })
      this.error = 'Falta algun dato';
    }
  }
  error!: string | null;

  cancelar(){ 
     this.router.navigate(['auth'])
  }

  registro(){
    this.router.navigate(['auth/registro'])
    
  }


  createClick(){
    var val={
      nombreCompleto:this.form.value.NombreCompleto,
      fechaNacimiento:this.form.value.FechaNacimiento,
      contrasenia:this.form.value.Contrasenia,
      idTipoUsuario:this.form.value.idTipoUsuario,
      telefono:this.form.value.Telefono,
      numeroLicencia:this.form.value.NumeroLicencia
    };

    console.log(this.form.value);

    this.http.post(environment.API_URL+'conductores',this.form.value)
    .subscribe(res=>{
      alert(res.toString());
      
    });
  }


  @Output() submitEM = new EventEmitter();

}
