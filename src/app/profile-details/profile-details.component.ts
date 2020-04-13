import { Repo } from './../repo';
import { Objects } from './../objects';
import { ProfileServiceService } from './../profile-service.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'GS-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {


  @Output() ifProfile = new EventEmitter<any>()

  profile:any
  username:string
  repos:any
    constructor(private service:ProfileServiceService) {
      
  }
  
  findProfile(){
    this.service.updateProfile(this.username)
    this.service.getinfo().subscribe(profile => {
      this.profile = profile
      console.log(profile)
    })
    this.service.getRepo().subscribe(repos => {
      console.log(repos)
      this.repos = repos
    })
  
  }

  ngOnInit(): void {
  }

}
