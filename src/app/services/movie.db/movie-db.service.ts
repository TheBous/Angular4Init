import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieDbService {

  constructor(private http: Http) { }


  getSimilarMovies(movie) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=67734a021f425fa1381227123a0f1a75&query=" + movie +"&format=json&limit=10")
      .map((res: Response) => res.json());
  }
}
