import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../classFiles/user';
@Injectable({ providedIn: 'root'})

export class AuthenticationService{
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;
  private userDetails:any;
  changePasswordDetails :{};
    
    
    constructor(private httpClient: HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    public getCurrentUser() : User{     
     return  this.currentUserSubject.value;                           
    }


    register(user: User): Observable<any>{
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        
      console.log("Inside post request"+ user);
      console.log("inside service", +user);
        return this.httpClient.post('http://localhost:8080/registerUsers',user,{headers});
        
    
    }


    login(username : any, password : any){
      console.log("inside login service");
     console.log(username);
     console.log(password);
     const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        
        
      return this.httpClient.post('http://localhost:8080/loginUser',{username,password},{headers})
      .pipe(map(user=>{
        this.userDetails = user;
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(this.userDetails);
        return user;
      }))
    }

    logout(){
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
    
    changePassword(email:any, currentpassword:any,changePasswordObject:any){
      console.log(changePasswordObject.newPassword)
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      console.log(email)
      this.changePasswordDetails ={
        'email': email,
        'currentPassword': currentpassword,
        'newPassword': changePasswordObject.newPassword

      }
      
      return this.httpClient.post('http://localhost:8080/changePassword',this.changePasswordDetails,{headers})
      .pipe(map(user=>{
        this.userDetails = user;
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(this.userDetails);
        return user;
      }))

    }
   

   
}
