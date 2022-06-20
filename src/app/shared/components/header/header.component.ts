import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Auth } from 'src/app/authentication/interfaces/auth.interface';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { HomeAjustadorComponent } from 'src/app/views/modules/ajustador/components/home-ajustador/home-ajustador.component';

@Component({
  selector: 'header-compent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuRol: any[] = [];
  
  public rol: any;

  /**Se llena con la información del AuthService */
  //undefined
  get auth(){
    return this.authService.auth;
  }

  constructor(private router: Router,
              private authService: AuthService) { 

                this.rol = this.auth.idTipoUsuario
                console.log(this.auth.idTipoUsuario)

              }

  ngOnInit(): void {
    this.generarMenu();
  }


  /** Botón para cerrar sesión */
  logOut(){
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  irA(opcion: any){
    switch (this.rol) {
      case 4:
        switch (opcion.label) {
          case 'Inicio':
            this.router.navigate(['/hdi']);
            break;
          case 'Registrar trabajador':
            this.router.navigate(['hdi/admin/registrartrabajador'])
        }
        break;
      case 3:
        switch (opcion.label) {
          case 'Inicio':
            this.router.navigate(['/hdi']);
            break;
          case 'Reportes':
            this.router.navigate(['hdi/ajustador/reportesasignados'])
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
      case 4:
          this.menuRol = [
            {
              label: "Inicio"
            },
            {
              label: "Registrar trabajador"
            }
          ];
        break;
      case 1:
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
      case 3:
        this.menuRol = [
          {
            label: "Inicio"
          },
          {
            label: "Reportes"
          }
        ]
      break;
      case 3:
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
