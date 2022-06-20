import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-home-ajustador',
  templateUrl: './home-ajustador.component.html',
  styleUrls: ['./home-ajustador.component.css']
})
export class HomeAjustadorComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  irAReportesAsignados() {
    this.router.navigate(["hdi/ajustador/reportesasignados"]);
  }

}
