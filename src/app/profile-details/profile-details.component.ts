import { HighlightDirective } from './../highlight.directive';
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


 

  profile:any
  username:string
  repos:any

  @Output() isComplete = new EventEmitter<any>();

  requestgit(complete:boolean){
    this.isComplete.emit(complete);
  }
    constructor() {
      
  }
  

  
  

  ngOnInit(): void {
  }

}
