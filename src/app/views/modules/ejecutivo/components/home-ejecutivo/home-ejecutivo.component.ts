import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-ejecutivo',
  templateUrl: './home-ejecutivo.component.html',
  styleUrls: ['./home-ejecutivo.component.css']
})
export class HomeEjecutivoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irA() {
    this.router.navigate(['hdi/ejecutivo/asignarreportes'])
  }
}
