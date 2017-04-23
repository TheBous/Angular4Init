import { Component } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
  inputs: ['initialChipValue']
})
export class ChipComponent {
  initialChipValue: number;


  changeChipsValue(): number{
    return this.initialChipValue = 345;
  }

}
