import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  likeNumber: number = 0;

  like() {
    console.log("like");
    this.likeNumber += 1;
  }

  unlike() {
    console.log("unlike");
    if (this.likeNumber == 0) {
      this.likeNumber = 0;
    }
    else this.likeNumber -= 1;
  }
  constructor() { }



}
