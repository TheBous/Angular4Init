import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  getAuthor() : string[] {
    return ["Francesco", "Giovanni", "Cerebroleso"];
  }
}
