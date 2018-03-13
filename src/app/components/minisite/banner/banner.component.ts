import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service"

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  private title :string ="Banner";
  private description : string ="Main message to deliver as a form of advertisement";
  private bkurl: string ="../../../../assets/cafe.png";
  private message : string;
  private placeholderShow : boolean;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentPlaceholder.subscribe(placeholderShow => this.placeholderShow = placeholderShow);
  }

  onDragStart(){
    this.data.changeMessage("banner",true);
  }

}

// <div style="background-color: red">
//   <div>
//     <div>
//       <br />
//       Viatick Cafe
//     </div>
//     <div>
//       <br />
//       The first Coding theme cafe in the world!
//       <br />
//       <br />
//       <br />
//     </div>
//   </div>
// </div>


// banner css
// .banner{
//   background-image: url('../../../../assets/cafe.png');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// }
//
// .overlay{
//   background-color: rgba(85, 55, 0, 0.5);
//   color: rgb(255, 255, 255);
//   padding: 10px;
// }
//
// .title{
//   text-align: center;
//   font-size: 22px;
// }
//
// .text{
//   text-align: center;
//   font-size: 12px;
// }
