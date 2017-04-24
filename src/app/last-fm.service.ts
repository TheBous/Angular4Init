import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastFmService {
  constructor(private http: Http) { }

  getUser(artist) {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+artist+"&api_key=823ebf7674a816efb2b538446d6ccf79&format=json&limit=15")
      .map((res: Response) => res.json());
  }

}
