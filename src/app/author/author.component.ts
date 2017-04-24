import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author/author.service';
import { LikeComponent } from '../like/like.component'

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService]
})
export class AuthorComponent{
  authors;

  constructor(authorService: AuthorService){
    this.authors = authorService.getAuthor();
  }

}
