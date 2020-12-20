import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';

@Directive({
  selector: '[appLoginWelcome]'
})
export class LoginWelcomeDirective {

  constructor(private element: ElementRef) {

   }

   ngOnInit(){
    console.log(this.element.nativeElement);
    this.element.nativeElement.innerHTML ="<b>Welcome to my Website</b>";
   }

}
