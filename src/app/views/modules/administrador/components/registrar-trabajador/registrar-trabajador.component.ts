import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-registrar-trabajador',
  templateUrl: './registrar-trabajador.component.html',
  styleUrls: ['./registrar-trabajador.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ] 
})
export class RegistrarTrabajadorComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    fecNac: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  error!: string | null;
  tipoRol: any[] = ["ajustador","admin","conductor","ejecutivo"];

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

  cancelar() {

  }
}
