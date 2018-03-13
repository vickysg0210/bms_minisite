import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  private title :string ="Social Media";
  private description : string ="Social sharing links";
  private bkurl: string ="../../../../assets/sharing.jpg";

  constructor() { }

  ngOnInit() {
  }

}
