import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes,  } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

//components
import { AppComponent } from './app.component';
// import { CoursesComponent } from './courses/courses.component';
// import { AuthorComponent } from './author/author.component';
// import { ChipComponent } from './chip/chip.component';
// import { LikeComponent } from './like/like.component';
// import { DoubleConditionIfElseComponent } from './double-condition-if-else/double-condition-if-else.component';
import { SimilarArtistComponent } from './songs/similar-artist/similar-artist.component';
import { InfoArtistComponent } from './songs/info-artist/info-artist.component';
import { SimilarMoviesComponent } from './movies/similar-movies/similar-movies.component';

//services
import { LastFmService } from './services/last.fm/last-fm.service';

//app route
const appRoutes: Routes = [
  { path: 'movie', component: SimilarMoviesComponent },
  { path: 'artist', component: InfoArtistComponent },
  //{ path: 'book', component: SimilarBooksComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    // CoursesComponent,
    // AuthorComponent,
    // ChipComponent,
    // LikeComponent,
    // DoubleConditionIfElseComponent,
    SimilarArtistComponent,
    InfoArtistComponent,
    SimilarMoviesComponent,
  ],

  imports: [
    BrowserModule,
    //route
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),

  ],
  providers: [LastFmService],

  bootstrap: [AppComponent]
})
export class AppModule { }
