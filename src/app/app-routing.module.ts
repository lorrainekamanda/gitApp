import { HttpClient } from '@angular/common/http';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { GithubComponent } from './github/github.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
   {path:'home',component:GithubComponent},
   

 {path:'', redirectTo: '/profile', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
