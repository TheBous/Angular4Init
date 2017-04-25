import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../services/last.fm/last-fm.service'

@Component({
  selector: 'similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css'],
  providers: [LastFmService]
})
export class SimilarArtistComponent implements OnInit{

  constructor(private _lastFmService_: LastFmService) { }
  similar = {};
  trueTemplate = false;
  loadSimilarUser(similElement){
    this.trueTemplate = true;
    this._lastFmService_.getUser(similElement).subscribe(data => this.similar = data);
    console.log(this.similar);
  }

  ngOnInit() {}
}
