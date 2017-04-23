import { Component } from '@angular/core';
import { CourseService } from '../services/course/course.service';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})

export class CoursesComponent {
  title: string = "Some title tests";
  courses: string[];
  authors;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  //test methods/events binding
  positionGame(event){
    console.log("Dart Vader");
    if(event.layerX > 100){
      alert("You Win!");
    }
    else alert("You Lose");
  }
}
