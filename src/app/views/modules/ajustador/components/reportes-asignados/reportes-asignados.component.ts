import { Component,AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-reportes-asignados',
  templateUrl: './reportes-asignados.component.html',
  styleUrls: ['./reportes-asignados.component.css']
})
export class ReportesAsignadosComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }

 
  

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   
  }

}

