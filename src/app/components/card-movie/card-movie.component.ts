import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') public movie: any

  constructor() { }

  ngOnInit(): void {
  }


  getImagen(){
    return this.movie.Poster === 'N/A' ? 'https://via.placeholder.com/600' :this.movie.Poster
    // if(this.movie.Poster === 'N/A'){
    //   return 'https://via.placeholder.com/600'
    // }
    // return this.movie.Poster
  }
}
