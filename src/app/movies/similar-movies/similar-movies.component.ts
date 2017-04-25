import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../services/movie.db/movie-db.service'
@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css'],
  providers: [ MovieDbService ]
})
export class SimilarMoviesComponent implements OnInit {

  constructor(private _movieDbService_: MovieDbService) { }

  similarMovies = {};

  loadSimilarMovies(movie){
    this._movieDbService_.getSimilarMovies(movie).subscribe(data => this.similarMovies = data);
    console.log(this.similarMovies);
  }


  ngOnInit() {
  }

}
