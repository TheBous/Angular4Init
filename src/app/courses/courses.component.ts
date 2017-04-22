import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  title: string = "Some title tests"
  courses = ["Course1", "Course2", "Course3"];
}
