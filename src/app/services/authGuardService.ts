import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})

export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser')) {    
      
      return true;
    }
    else{
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
    }
  }
 
}