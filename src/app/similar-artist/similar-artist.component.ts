import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../last-fm.service'

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
  loadSimilarUser(){
    this.trueTemplate = true;
    this._lastFmService_.getUser("Cher").subscribe(data => this.similar = data);
    console.log(this.similar);
  }

  ngOnInit() {}
}
