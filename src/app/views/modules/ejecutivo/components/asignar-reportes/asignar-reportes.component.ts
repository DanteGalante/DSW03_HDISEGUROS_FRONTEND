import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-asignar-reportes',
  templateUrl: './asignar-reportes.component.html',
  styleUrls: ['./asignar-reportes.component.css']
})
export class AsignarReportesComponent implements OnInit, AfterViewInit{
  //TODO Codigo hardcodeado
  displayedColumns: string[] = ['conductor', 'fecNacimiento', 'estatus', 'ajustador'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ajustadores = AJUSTADORES;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
//TODO Codigo hardcodeado
export interface PeriodicElement {
  fecnac: string;
  conductor: string;
  estatus: string;
  symbol: string;
}
//TODO Codigo hardcodeado
export interface Ajustador {
  nombre: string;
}
//TODO Codigo hardcodeado
const ELEMENT_DATA: PeriodicElement[] = [
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
  {conductor: 'Dan Javier Olvera Villeda', fecnac: '21/12/1999', estatus: 'pendiente', symbol: 'H'},
];
//TODO Codigo hardcodeado
const AJUSTADORES: Ajustador[] = [
  {nombre: 'Emilio Alarcon Santos'},
  {nombre: 'Jose Luis Carvajal Pacheco'},
  {nombre: 'Angel Asis Reyes'}
];
