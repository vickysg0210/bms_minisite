export class BannerStyle {
  title: string;
  description: string;
  bkcolor: string;
  headerSize : string;
  headerAlign : string;
  textSize: string;
  descriptionAlign:string;
  textColor: string;
  bgImage: string;

  constructor(title: string, description: string, bkcolor: string){
    this.title = title;
    this.description = description;
    this.bkcolor = bkcolor;
    this.headerSize = '22px';
    this.headerAlign = 'center';
    this.textSize = '12px';
    this.descriptionAlign ="center";
    this.textColor = '#ffffff';
    this.bgImage = "url('../../../../assets/cafe.png')";
  }
}
