import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../services/last.fm/last-fm.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delay';


//model
import { Artist } from '../../model/artist';

@Component({
  selector: 'similar-artist',
  templateUrl: './similar-artist.component.html',
  styleUrls: ['./similar-artist.component.css'],
  providers: [LastFmService]
})
export class SimilarArtistComponent implements OnInit {

  constructor(private _lastFmService_: LastFmService) { }
  similArtist: String;
  similar: Array<Artist> = new Array();
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
      .subscribe(data => {
        console.log("Array di User from server:",data);
        // console.log("length array similar", data.length)
        for(let i=0;i<data.length;i++){
            this.similar[i] = new Artist(data[i].name, data[i].mbid, data[i].match, data[i].url, data[i].image, data[i].streamable );
            // console.log("this.similar[i]:",this.similar[i])
        }
        // this.similar = new Artist(data.image, data.match, data.mbid, data.name, data.streamable, data.url);
        console.log("Array Similar:+++++", this.similar);
      });
  }

  showTopTracks(event, artist) {
    console.log(artist);
    this._lastFmService_.getArtistTopTrack(artist).subscribe(data => this.topTrack = data);
    this.showReveal = true;

    console.log(this.topTrack);
  }


  ngOnInit() { }
}
