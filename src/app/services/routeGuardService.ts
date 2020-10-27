import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({ providedIn: 'root'})

export class RouteGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      
    if (localStorage.getItem('currentUser') != null) {    
      window.location.href = 'home';
      return false;
    }
    else{
       return true;
    }
  }
  
}