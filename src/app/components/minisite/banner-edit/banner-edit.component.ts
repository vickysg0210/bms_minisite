import { Component, OnInit, Input} from '@angular/core';
// import { FormControl } from '@angular/class';
import { BannerStyle } from "../../../classes/banner-style";


@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {
  @Input()
  cusStyle?: BannerStyle;

  // private titleControl = new FormControl;
  // private descriptionControl = new FormControl;

  constructor() {
  }
  ngOnInit() {
    // this.titleControl.setValue("Viatick Cafe");
    // this.descriptionControl.setValue("The first Coding theme cafe in the world!");
    // {{ myControl.value | json }}
    // console.log(this.titleControl.value);
  }
}
