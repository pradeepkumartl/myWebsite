import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLoginFieldsValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LoginFieldsValidatorDirective, multi: true}]
})
export class LoginFieldsValidatorDirective implements Validator {

  constructor() { }

  validate(control:AbstractControl): ValidationErrors|null{
    console.log(control.value);
    let formValues = control.value;
    if(formValues.username === formValues.password){
        return {sameValue:{valid: false}};
    } else {
      return null;
    }
  }
}
