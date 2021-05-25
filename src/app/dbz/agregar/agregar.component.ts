import { Component, OnInit, Input, Output} from '@angular/core';
import { fromEvent } from 'rxjs';
import { Personaje } from '../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';
import { dbzService } from '../service/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  
  @Input() nuevo: Personaje = {

    nombre : '',
    poder : 0

  }


  constructor( private DbzService:dbzService ) {


     
   }

  ngOnInit(): void {

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if(this.nuevo.nombre.trim().length === 0) {return;}
        
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.DbzService.agregarPersonaje( this.nuevo );
      this.nuevo = {
      
        nombre : '',
        poder: 0


      }
    
  }


}
