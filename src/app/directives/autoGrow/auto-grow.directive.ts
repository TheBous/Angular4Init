import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[AutoGrow]',
  host: {
    '(focus)' : 'onFocus()',
    '(blur)' : 'onBlur()'
  }
})
export class AutoGrowDirective {

  onFocus(){

  }

  onBlur(){

  }

}
