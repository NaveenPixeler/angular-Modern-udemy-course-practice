import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';


import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewsModule } from './views/views.module';
import { ModsModule } from './mods/mods.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,  
    RouterModule,
    ViewsModule,
    ModsModule,
    AppRoutingModule, 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    NotFoundComponent
  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
