import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';




@Injectable()
export class dbzService {

   private _personajes: Personaje[] = [
        {   
          nombre: 'Goku',
          poder: 15000
        },
      
        {   
          nombre: 'Veguetta',
          poder: 7500
        },
      
      
        
        ];


        get personajes(): Personaje[] {
        
            return [...this._personajes];// operador spread

        }




    constructor() { }

    agregarPersonaje ( personaje: Personaje ){

    this._personajes.push( personaje ); 


    }



}
