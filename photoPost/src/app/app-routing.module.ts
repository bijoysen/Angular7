import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyPostComponent } from './my-post/my-post.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouteGuardGuard } from './auth/route-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'allpost', component: AllPostsComponent, canActivate: [RouteGuardGuard] },
  {path: 'following', component: FollowingComponent, canActivate: [RouteGuardGuard] },
  {path: 'favourites', component: FavouritesComponent, canActivate: [RouteGuardGuard] },
  {path: 'my-posts', component: MyPostComponent, canActivate: [RouteGuardGuard] },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
