import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private title :string ="Map";
  private description : string ="Location pointer and address on map";
  private bkurl: string ="../../../../assets/map.png";

  constructor() { }

  ngOnInit() {
  }

}
