import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { dbzService } from './service/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
   
  exports:[

   MainPageComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  providers: [

  dbzService

  ]
  
})
export class DbzModule { }


