import { ProfileServiceService } from './profile-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { from } from 'rxjs';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { DatepipePipe } from './datepipe.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ProfileDetailsComponent,
    DatepipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
