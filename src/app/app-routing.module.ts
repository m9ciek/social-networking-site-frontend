import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent  } from './register-form/register-form.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent },
  {path: 'register-form' , component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
