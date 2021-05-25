import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  nuevo: Personaje = {

    nombre : 'Gohan',
    poder : 9000

  }

 
  // get personajes(): Personaje[] {

  // return this.DbzService.personajes;

  // }

 

  constructor() // Inyeccion de dependencias 
  {

    

  }



  ngOnInit(): void {

  }

}
