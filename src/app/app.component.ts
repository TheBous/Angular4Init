import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorComponent } from './author/author.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [CoursesComponent]
})

export class AppComponent {
  title = 'SONG MUSIC';
  imgURL = "http://oritiquintac.altervista.org/6_musica5/musica.jpg";
  value = 123;

  mostraNumber(){
    alert("fracchiollo numero bello");
  }
}
