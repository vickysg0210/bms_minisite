import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<string>("");
  private placeholderSource = new BehaviorSubject<boolean>(false);

  currentMessage = this.messageSource.asObservable();
  currentPlaceholder = this.placeholderSource.asObservable();

  constructor() { }

  changeMessage(message: string, placeholderShow:boolean) {
    this.messageSource.next(message)
    this.placeholderSource.next(placeholderShow)
  }
}
