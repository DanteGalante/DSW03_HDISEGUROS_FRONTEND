import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'header-compent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuRol: any[] = [];
  //TODO Harcodeado para ver si funcionaba
  public rol: string = "ajustador";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generarMenu();
  }

  salir(){
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
      //TODO Aca tiene que estar toda la programacion que permite ir a las demas pantallas
        break;
      default:
        break;
    }
  }

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
