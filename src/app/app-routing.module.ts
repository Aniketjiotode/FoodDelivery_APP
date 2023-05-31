import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpwdComponent } from './Components/forgotpwd/forgotpwd.component';
import { ResetpwdComponent } from './Components/resetpwd/resetpwd.component';

const routes: Routes = [
  {
    path:'logindemo',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotpwdComponent
  },
  {
    path:'reset',
    component:ResetpwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
