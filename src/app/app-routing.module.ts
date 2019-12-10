import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
