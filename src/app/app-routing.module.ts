import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ProfileComponent} from './profile/profile.component'
import {AuthGuardService} from './services/authGuardService';
import {RouteGuardService} from './services/routeGuardService';
import {BillingComponent} from './billing/billing.component'

const routes: Routes = [
  {path:"", component: BodyComponent},
  {path:"home", component: BodyComponent},
  {path:"login",component: LoginComponent,canActivate: [RouteGuardService] },
  {path:"register",component: RegisterComponent,canActivate: [RouteGuardService] },
  {path:"profile", component:ProfileComponent, canActivate: [AuthGuardService]},
  {path:"billing",component: BillingComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
