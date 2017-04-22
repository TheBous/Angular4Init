import { Component } from '@angular/core';
import { CourseService } from '../services/course/course.service';
import { AuthorService } from '../services/author/author.service';
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService, AuthorService]
})

export class CoursesComponent {
  title: string = "Some title tests";
  courses: string[];
  author;

  constructor(courseService: CourseService, authorService: AuthorService){
    this.courses = courseService.getCourses();
    this.author = authorService.getAuthor();
  }
}
