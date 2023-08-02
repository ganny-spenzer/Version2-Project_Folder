import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  facebookLink:string=environment.facebookLink;
  twitterLink:string=environment.twitterLink;
  linkedInLink:string=environment.linkedInLink;
  instagramLink:string=environment.instagramLink;
  ngOnInit() {
  }

}
