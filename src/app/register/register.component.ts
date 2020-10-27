import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authenticationService';
import { AlertService } from '../services/alertService';
import { MustMatch } from './mustMatchValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  submitted= false;
  loading = false;
  constructor(private formBuilder : FormBuilder,
    private authenticationService : AuthenticationService,
    private router : Router,
    private alertService: AlertService
    
    ) { 

  }
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phoneNumber:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f(){

    return this.registerForm.controls;
  } 

  onSubmit(){
    this.submitted = true;
    this.alertService.clear();
    if (this.registerForm.invalid) {
      return;
    }
  this.loading = true;

    this.authenticationService.register(this.registerForm.value).subscribe(
      (result)=> {        
        
        this.alertService.success('Registration Successful.Please Login',true);
        this.router.navigate(['/login']);
    },
    (error) => {
      this.alertService.error(error.error);      
        this.loading = false;
    });
    
  } 

}

