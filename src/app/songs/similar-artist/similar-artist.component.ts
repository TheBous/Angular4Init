import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/last.fm/last-fm.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css'],
  providers: [LastFmService]
})
export class SimilarArtistComponent implements OnInit {

  constructor(private _lastFmService_: LastFmService) { }
  similArtist: String;
  similar: Object = {};
  ArtistInfo = {};
  topTrack = {};
  trueTemplate = false;
  showReveal = false;


  loadSimilarUser(similElement) {
    this.similArtist = similElement;
    this.trueTemplate = true;
    this._lastFmService_.getSimilarArtist(similElement)
      .delay(1500)
      .debounceTime(400)
      .distinctUntilChanged()
      // .flatMap(term => this._lastFmService_.getArtistInfo(term))
      .subscribe(data => this.similar = data);
  }

  showTopTracks(event, artist) {
    console.log(artist);
    this._lastFmService_.getArtistTopTrack(artist).subscribe(data => this.topTrack = data);
    this.showReveal = true;

    console.log(this.topTrack);
  }


  ngOnInit() { }
}
