import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/authentication/interfaces/auth.interface';
import { AuthService } from 'src/app/authentication/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rol: any;

  get auth(){
    return this.authService.auth;
  }

  constructor(private router: Router,
    private authService: AuthService) { 
    
    this.rol = this.auth.idTipoUsuario
    console.log(this.auth.idTipoUsuario)
    
    
  }

  ngOnInit(): void {
  }

}
