import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import {DataService} from "../../../services/data.service"

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {
  public advertisementList : Array<string> = [];
  public advertisementListCopy : Array<string> = [];
  public message: string;
  public placeholderShow: boolean = false;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentPlaceholder.subscribe(placeholderShow => this.placeholderShow = placeholderShow);

  }

  onDrop(event : DndDropEvent, order: number){
    // this.title = event.data;
    // console.log(this.title);
    if(order == 0){
      this.advertisementList.unshift(this.message);
      console.log(this.advertisementList);
    } else {
      this.advertisementListCopy = this.advertisementList.splice( order, this.advertisementList.length - order );
      this.advertisementList.push(this.message);
      this.advertisementList = this.advertisementList.concat(this.advertisementListCopy);
    }

    this.placeholderShow = false;
  }
}
