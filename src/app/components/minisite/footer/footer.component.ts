import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../services/data.service"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private title :string ="Footer";
  private description : string ="Display company name, link, copyrights and etc.";
  private bkurl: string ="../../../../assets/black.png";
  private message : string;
  private placeholderShow : boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentPlaceholder.subscribe(placeholderShow => this.placeholderShow = placeholderShow);
  }

  onDragStart(){
    this.data.changeMessage("footer",true);
  }
}
