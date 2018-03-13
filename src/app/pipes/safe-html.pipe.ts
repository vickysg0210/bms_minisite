import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer :DomSanitizer){}

  public transform(value: any,type: string = 'html'): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
  case 'html': return this._sanitizer.bypassSecurityTrustHtml(value);
  case 'style': return this._sanitizer.bypassSecurityTrustStyle(value);
  case 'script': return this._sanitizer.bypassSecurityTrustScript(value);
  case 'url': return this._sanitizer.bypassSecurityTrustUrl(value);
  case 'resourceUrl': return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
