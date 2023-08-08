import { Component, OnInit } from '@angular/core';
import { socialMediaLinks } from 'src/environments/environment.development';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  facebookLink:string=socialMediaLinks.facebookLink;
  twitterLink:string=socialMediaLinks.twitterLink;
  linkedInLink:string=socialMediaLinks.linkedInLink;
  instagramLink:string=socialMediaLinks.instagramLink;
  ngOnInit() {
  }

}
