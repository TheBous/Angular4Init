import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
  inputs: ['initialChipValue'],
  outputs: ['change']
})
export class ChipComponent {
  //@Input() initialChipValue: number;
  initialChipValue: number;

  // @Output() change = new EventEmitter();
  change = new EventEmitter();



  changeChipsValue(): number{
    //output event to appComponent
    this.change.emit({newValue: this.initialChipValue});
    return this.initialChipValue = 345;

  }

}
