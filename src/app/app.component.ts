import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedFeature = 'recipe';

  onMenuLinkClicked(featureLink: string){
  	this.selectedFeature = featureLink;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB0eAA-O4n1UExKD5u2gJydVHIog6vOjTI",
      authDomain: "ng-recipebook-1f4c6.firebaseapp.com"
    });
  }
}
