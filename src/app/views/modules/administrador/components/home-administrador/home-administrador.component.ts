import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irA() {
    this.router.navigate(["hdi/admin/registrartrabajador"]);
  }

}
