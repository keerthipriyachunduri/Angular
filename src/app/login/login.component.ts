import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authenticationService';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alertService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  returnUrl: string;
  loading: false;

  constructor(
    private formBuilder : FormBuilder, 
    private authenticationService: AuthenticationService, 
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router:Router) { }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',Validators.required]
    });

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  
  }

  get formDetails(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;    
    this.alertService.clear();
    console.log(this.loginForm.controls);
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      (result)=> { 
     window.location.href = 'home';
    },(error) => {        
        this.alertService.error(error.error);
        this.loading = false;
    
    })
    
  }
}
