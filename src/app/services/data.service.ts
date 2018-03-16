import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BannerStyle } from "../classes/banner-style"


@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<string>("");
  private placeholderSource = new BehaviorSubject<boolean>(false);
  private bannerStyleSource = new BehaviorSubject<BannerStyle>(null);

  currentMessage = this.messageSource.asObservable();
  currentPlaceholder = this.placeholderSource.asObservable();
  currentBannerStyle = this.bannerStyleSource.asObservable();

  constructor() { }

  changeMessage(message: string, placeholderShow:boolean) {
    this.messageSource.next(message)
    this.placeholderSource.next(placeholderShow)
  }

  changeColorPicker(bannerStyle: BannerStyle){
    this.bannerStyleSource.next(bannerStyle)
  }
}
