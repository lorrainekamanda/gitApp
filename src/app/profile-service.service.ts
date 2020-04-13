
import { Objects } from './objects';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  visible:Objects

  private username:string
  private clientID = 'a6cf45e6db101a2b29c0'
  private clientSecret ='c626b3a3cc56b85851c6e5e1468ff384c93c3b37'


  constructor( private http:HttpClient) {
    console.log ("it s working")
      this.username = 'lorrainekamanda'
    
   }
   getinfo(){
      return this.http.get("https://api.github.com/users/" + this.username +
       "?client_id ="+this.clientID + "&client_secret =" + this.clientSecret)
   }
  

   updateProfile(username:string){
     this.username = username
   }
}
