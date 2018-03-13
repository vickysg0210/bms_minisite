import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private title :string ="Carousel";
  private description : string ="Horizontal slider for image with text";
  private bkurl: string ="../../../../assets/helloworld.png";

  constructor() { }

  ngOnInit() {
  }

}
