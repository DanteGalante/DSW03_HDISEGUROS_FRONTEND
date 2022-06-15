import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-compent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuRol: any[] = [];
  //TODO Harcodeado para ver si funcionaba
  public rol: string = "admin";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.generarMenu();
  }

  salir(){
    this.router.navigate(['/auth']);
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
