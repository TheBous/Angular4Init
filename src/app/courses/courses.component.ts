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
}
