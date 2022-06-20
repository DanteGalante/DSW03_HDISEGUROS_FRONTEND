import { HttpClient } from '@angular/common/http';
import { Component,AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-reportes-asignados',
  templateUrl: './reportes-asignados.component.html',
  styleUrls: ['./reportes-asignados.component.css']
})
export class ReportesAsignadosComponent implements OnInit {


  constructor(private http:HttpClient,
              ) {

   }

   reportes:any=[];
   modalTitle="";
   idReporteSiniestro=0;
   Latitud="";
   Longitud="";
   idVehiculo=0;
   

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'reportesiniestro')
    .subscribe(data=>{
      this.reportes=data;
    }
    );
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  /** Fila seleccionada */
  RowSelected(rep:any) {
    console.log(rep.idReporteSiniestro);
  }

}

