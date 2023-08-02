import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  facebookLink:string=environment.facebookLink;
  twitterLink:string=environment.twitterLink;
  linkedInLink:string=environment.linkedInLink;
  instagramLink:string=environment.instagramLink;
  ngOnInit() {
 
  }

}
