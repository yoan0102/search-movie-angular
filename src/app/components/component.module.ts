import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { CardMovieComponent } from './card-movie/card-movie.component';



@NgModule({
  declarations: [
    MoviesComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MoviesComponent,

  ]
})
export class ComponentModule { }
