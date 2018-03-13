import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  private title : string;
  private description : string;

  constructor() {
    this.title = "Viatick Cafe";
    this.description = "The first Coding theme cafe in the world!";
  }

  ngOnInit() {
  }

}
