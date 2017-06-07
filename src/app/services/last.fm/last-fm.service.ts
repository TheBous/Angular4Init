import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


//model
import {Artist} from '../../model/artist';

@Injectable()

export class LastFmService {
  constructor(private _http: Http) { }

  getSimilarArtist(artist): Observable<Array<Artist>> {
    return this._http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=10")
      .map((res: Response) => {
        console.log(res.headers)
        console.log(res.json().similarartists.artist);
        return res.json().similarartists.artist;

      })
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getArtistInfo(artist) {
    return this._http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=15")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));

  }

  getArtistTopTrack(artist) {
    return this._http.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=5")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));

  }

}
