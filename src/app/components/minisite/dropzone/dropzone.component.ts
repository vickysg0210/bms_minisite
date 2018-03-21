import { Component, OnInit} from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import {DataService} from "../../../services/data.service"
import { BannerEditComponent } from "../banner-edit/banner-edit.component";
import {BannerStyle } from "../../../classes/banner-style";
import {FooterStyle} from "../../../interfaces/footer-style";
import {
  Ng4FilesStatus,
  Ng4FilesSelected
} from 'angular4-files-upload';


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
  public bannerOverlayColor: string = 'rgba(108,155,108,0.5)';
  private index: number;
  private centerAlignment : string = "center";
  private leftAlignment : string = "left";
  private bgImageUrl : string = "url('../../../../assets/cafe.png')";
  public selectedFiles : Ng4FilesSelected;



  constructor(private data : DataService) {
    // iconRegistry.addSvgIcon('left-alignment',sanitizer.bypassSecurityTrustResourceUrl('/assets/left-alignment.svg'));
    // iconRegistry.addSvgIcon('center-alignment',sanitizer.bypassSecurityTrustResourceUrl('/assets/center-alignment.svg'));
    // iconRegistry.addSvgIconSetInNamespace('right-alignment',sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/svg-icons/right-alignment.svg'));

  }

  private onChangeColor = function(){
    this.displayElementList[this.index].bkcolor = this.bannerOverlayColor;
  }

  private onChangeTextColor = function(){
    // this.displayElementList[this.index].bkcolor = this.bannerOverlayColor;
  }
  private onLeftAlignHeader = function(){
    this.displayElementList[this.index].headerAlign = "left";
  }

  private onCenterAlignHeader = function(){
    this.displayElementList[this.index].headerAlign = "center";
  }

  private onRightAlignHeader = function(){
    this.displayElementList[this.index].headerAlign = "right";
  }

  private onLeftAlignDescription = function(){
    this.displayElementList[this.index].descriptionAlign = "left";
  }

  private onCenterAlignDescrption = function(){
    this.displayElementList[this.index].descriptionAlign = "center";
  }

  private onRightAlignDescrption = function(){
    this.displayElementList[this.index].descriptionAlign = "right";
  }

  private bannerEditBarOpen = function(i : number){
    this.bannerEditBarShow = true;
    this.index = i;
  }

  public filesSelect(selectedFiles: Ng4FilesSelected): void {
    // if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
    //   this.selectedFiles = selectedFiles.status;
    //   return;
    console.log(selectedFiles);
    // this.bgImageUrl = selectedFiles.files[0].name;
    // console.log(this.bgImageUrl)

      // Hnadle error statuses here
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
    this.placeholderShow = false;
  }

  private isBannerStyle = function(obj: any) : boolean{
    return obj instanceof BannerStyle;
  }
}
