import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyPostComponent } from './my-post/my-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'allpost', component: AllPostsComponent },
  {path: 'following', component: FollowingComponent },
  {path: 'favourites', component: FavouritesComponent },
  {path: 'my-posts', component: MyPostComponent }
  // {path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
