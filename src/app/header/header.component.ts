import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authenticationService'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userLoggedIn = false;

  constructor(private authenticationService: AuthenticationService,private router: Router) { 

  }

  ngOnInit(): void {
    if(this.authenticationService.getCurrentUser() !=null){
      this.userLoggedIn = true;
    }
   
      
  }
  logout(){
        this.authenticationService.logout();
  
  }

}
