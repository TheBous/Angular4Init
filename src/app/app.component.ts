import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [CoursesComponent]
})
export class AppComponent {
  title = 'My first Angular 2 app {{mhee}}';
}
