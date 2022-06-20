import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dictaminar-reporte',
  templateUrl: './dictaminar-reporte.component.html',
  styleUrls: ['./dictaminar-reporte.component.css']
})
export class DictaminarReporteComponent implements OnInit {

  form: FormGroup = new FormGroup({
    descripcionSiniestro: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
    private http:HttpClient) { 
      this.http.post
    }

  ngOnInit(): void {
  }

  submit() {
    console.log('resul', this.form.value)
    if (this.form.valid && this.form.touched) {
      this.error = '';
      this.submitEM.emit(this.form.value);
      this.form.reset();
      Swal.fire(
        'Exito',
        'Dictamen realizado con exito!',
        'success'
      )
      this.router.navigate(["hdi"]);

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al registrar el dictamen!'
      })
      this.error = 'Falta algun dato';
    }
  }
  error!: string | null;

  cancelar(){ 
     this.router.navigate(['hdi'])
  }

  registro(){
    this.router.navigate(['hdi'])
    
  }

  createClick(){
    var val ={
      Descripción:this.form.value.descripcionSiniestro,
      idReporteSiniestro:localStorage.getItem('idReporteSiniestro'),
      idUsuario:localStorage.getItem('idUsuario')
    };

    console.log(this.form.value.descripcionSiniestro);
    console.log(localStorage.getItem('idReporteSiniestro'));

    this.http.post(environment.API_URL+'dictamenes', val)
    .subscribe(res=>{
      alert(res.toString());
      
    });
  }
  

  @Output() submitEM = new EventEmitter();

}
