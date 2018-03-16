import { Component, OnInit} from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import {DataService} from "../../../services/data.service"
import { BannerEditComponent } from "../banner-edit/banner-edit.component";
import {BannerStyle } from "../../../classes/banner-style"
import {FooterStyle} from "../../../interfaces/footer-style"

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {
  public displayElementList: Array<any> = [];
  // public bannerStyle: BannerStyle;
  // public footerStyle : FooterStyle;
  public displayElementListCopy: Array<any> = [];
  public keyList : Array<string> = [];
  public keyListCopy : Array<string> = [];
  public message: string;
  public placeholderShow: boolean = false;
  private bannerEditBarShow: boolean = false;
  public bannerOverlayColor: string = 'rgba(0, 255, 0, 0.5)';
  private index: number;


  constructor(private data : DataService) {
  }

  private onChangeColor = function(){
    this.displayElementList[this.index].bkcolor = this.bannerOverlayColor;
  }

  private bannerEditBarOpen = function(i : number){
    this.bannerEditBarShow = true;
    this.index = i;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentPlaceholder.subscribe(placeholderShow => this.placeholderShow = placeholderShow);
  }


  onDrop(event : DndDropEvent, order: number){
    if(order == 0){
      if(this.message == "banner"){
        this.displayElementList.unshift(new BannerStyle("Viatick Cafe","The first Coding theme cafe in the world!",this.bannerOverlayColor));
      }
    } else {
      this.displayElementListCopy = this.displayElementList.splice(order,this.keyList.length-order);
      if(this.message == "banner"){
        this.displayElementList.push(new BannerStyle("Viatick Cafe","The first Coding theme cafe in the world!",this.bannerOverlayColor));
        this.displayElementList = this.displayElementList.concat(this.displayElementListCopy);
      }
    }
    console.log(this.displayElementList);
    this.placeholderShow = false;
  }

  private isBannerStyle = function(obj: any) : boolean{
    return obj instanceOf 'BannerStyle';
  }
  private closeEditPanel = function(){
    this.bannerEditBarShow = false;
  }
}
