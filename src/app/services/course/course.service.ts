import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  //: string[] --> return a string array
  getCourses(): string[] {
    return ["Course1", "Course2", "Course3"];
  }
}
