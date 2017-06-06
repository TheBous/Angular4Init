import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class LastFmService {
  constructor(private http: Http) { }

  getSimilarArtist(artist) : Observable<Object>{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=10")
      .map((res: Response) => res.json());
  }

  getArtistInfo(artist) {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=15")
      .map((res: Response) => res.json());
  }

  getArtistTopTrack(artist) {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=5")
      .map((res: Response) => res.json());
  }

}
