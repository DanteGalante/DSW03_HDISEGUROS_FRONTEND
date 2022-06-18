import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Auth } from 'src/app/authentication/interfaces/auth.interface';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'header-compent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuRol: any[] = [];
  //TODO Harcodeado para ver si funcionaba
  public rol: string = "ajustador";

  /**Se llena con la información del AuthService */
  //undefined
  get auth(){
    return this.authService.auth;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.generarMenu();
  }


  /** Botón para cerrar sesión */
  logOut(){
    this.router.navigate(['/auth']);
  }

  irA(opcion: any){
    switch (this.rol) {
      case 'admin':
        switch (opcion.label) {
          case 'Inicio':
            this.router.navigate(['/hdi']);
            break;
          case 'Registrar trabajador':
            this.router.navigate(['hdi/admin/registrartrabajador'])
        }
        break;
      case 'ajustador':
        switch (opcion.label) {
          case 'Reportes':
            this.router.navigate(['hdi/reportesasignados'])
            break;
        }
        break;
      //TODO Aca tiene que estar toda la programacion que permite ir a las demas pantallas
      default:
        break;
    }
  }

  /** Genera el Menu de acuerdo al rol del usuario */
  generarMenu() {
    switch (this.rol) {
      case "admin":
          this.menuRol = [
            {
              label: "Inicio"
            },
            {
              label: "Registrar trabajador"
            }
          ];
        break;
      case "conductor":
        this.menuRol = [
          {
            label: "Inicio"
          },
          {
            label: "Levantar reporte"
            
          },
          {
            label: "Seguros"
          }
        ];
      break;
      case "ajustador":
        this.menuRol = [
          {
            label: "Inicio"
          },
          {
            label: "Reportes"
          }
        ]
      break;
      case "ejecutivo":
        this.menuRol = [
          {
            label: "Inicio"
          },
          {
            label: "Asignar reportes"
          }
        ];
      break;
      default:
        break;
    }
  }

}
