import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  title: string = "Questo è il titolo di Courses interpolato(typescript merda)";
  courses = ["Course1", "Course2", "Course3"];
}
