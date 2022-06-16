import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rol: any;

  constructor(private router: Router) { 
    //TODO Esta linea se agrego para probar que funcionaba el switch
    this.rol = "admin"
  }

  ngOnInit(): void {
  }

}
