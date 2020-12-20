import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import {LoginService} from './services/login.service';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appLoginValidator]',
  providers:[{provide: NG_ASYNC_VALIDATORS, useExisting: LoginValidatorDirective, multi:true}]
})
export class LoginValidatorDirective implements Validator{

  constructor(private loginSvc: LoginService) { }

  validate(control: AbstractControl): ValidationErrors | null
  {
    console.log(control.value);
    return this.loginSvc.uniqueUsername(control.value).pipe(map((response)=>{
      console.log(response);
      if(!response.unique){
        return null;
      } else {
      return {validation:{valid: false}};
      }
    }))
  }
}
