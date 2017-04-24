import { Component } from '@angular/core';
import { LastFmService } from '../last-fm.service'

@Component({
  selector: 'similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css'],
  providers: [LastFmService]
})
export class SimilarArtistComponent {

  constructor(private _lastFmService_: LastFmService) { }
  similar = {};

  loadSimilarUser() {
    this._lastFmService_.getUser("Cher").subscribe(data => this.similar = data);
    console.log(this.similar);
  }

}
