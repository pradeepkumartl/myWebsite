import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanHomepageActivateGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean>
  {
    console.log('router:', this.router);
    console.log('ActivatedRouteSnapshot:', route);
    console.log('RouterStateSnapshot:', state);
    this.router.navigate(['login']);
    return false;
  }
}
