import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/authGuardService';
import { RouteGuardService } from './services/routeGuardService';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BillingComponent } from './billing/billing.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    ProfileComponent,
    EditProfileComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [AuthGuardService,RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
