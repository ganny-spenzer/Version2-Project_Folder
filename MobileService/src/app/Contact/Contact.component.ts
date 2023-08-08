import { Component, OnInit } from '@angular/core';
import { phoneNumberValues, socialMediaLinks } from 'src/environments/environment.development';


@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  facebookLink:string=socialMediaLinks.facebookLink;
  twitterLink:string=socialMediaLinks.twitterLink;
  linkedInLink:string=socialMediaLinks.linkedInLink;
  instagramLink:string=socialMediaLinks.instagramLink;
  phoneNumber1:string=phoneNumberValues.phoneNumber1;
  phoneNumber2:string=phoneNumberValues.phoneNumber2;
  ngOnInit() {

  }

}
