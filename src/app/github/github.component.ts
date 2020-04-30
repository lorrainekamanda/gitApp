import { HighlightDirective } from './../highlight.directive';
import { ProfileServiceService } from './../profile-service.service';
import { HttpClient } from '@angular/common/http';
import { Objects } from './../objects';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'GS-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
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
