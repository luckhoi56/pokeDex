import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {DisplayMaterialModule} from './modules/display-material.module';
import { SpriteCardComponent } from './sprite-card/sprite-card.component';
import { StatsbarsComponent } from './statsbars/statsbars.component';
import { PokemonMovesTableComponent } from './pokemon-moves-table/pokemon-moves-table.component';
import { NotFoundDialogComponent } from './search/not-found-dialog/not-found-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DisplayComponent,
    SpriteCardComponent,
    StatsbarsComponent,
    PokemonMovesTableComponent,
    NotFoundDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DisplayMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
