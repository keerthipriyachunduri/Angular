import { Component, OnInit } from '@angular/core';
import  { AuthenticationService} from '../services/authenticationService';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { MustMatch } from '../register/mustMatchValidator';
import {AlertService} from '../services/alertService';
import {User} from '../classFiles/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUserDetails: any
  changePasswordForm: FormGroup;
  loading = false;
  submitted = false;
  user:User;

  constructor(private authenticationService: AuthenticationService,
    private formBuilder : FormBuilder,
    private alertService: AlertService) { }
  
  ngOnInit(): void {
    this.currentUserDetails = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUserDetails);
    this.changePasswordForm = this.formBuilder.group({
      
      currentPassword:['',Validators.required],
      newPassword:['',[Validators.required,Validators.minLength(6)]],
      confirmNewPassword:['',Validators.required]
    },
    {
      validator: MustMatch('newPassword', 'confirmNewPassword')
    });
  }
  get formcp(){
    return this.changePasswordForm.controls;

  }

  onSubmit(){
    console.log(this.changePasswordForm);

    this.submitted = true;
    this.alertService.clear();
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.changePassword(this.currentUserDetails.User_Email_Id,this.currentUserDetails.Password,this.changePasswordForm.value).subscribe(
      (result)=> { 
        this.changePasswordForm.markAsPristine();
        this.changePasswordForm.markAsUntouched();
        this.changePasswordForm.updateValueAndValidity();
        
        this.loading = false;
        this.alertService.success('Password succesfully updated',true); 
    },(error) => {        
        this.alertService.error(error.error);
        this.loading = false;
    
    })
    

  }

  



}
