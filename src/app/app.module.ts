import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DndModule } from 'ngx-drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableDirective } from 'ng-contenteditable';
import {MatListModule} from '@angular/material/list';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Ng4FilesModule } from 'angular4-files-upload';

import { AppComponent } from './app.component';
import { CouponPageComponent } from './pages/minisite/coupon-page/coupon-page.component';
import { AdvertisementPageComponent } from './pages/minisite/advertisement-page/advertisement-page.component';
import { DropzoneComponent } from './components/minisite/dropzone/dropzone.component';
import { BannerComponent } from './components/minisite/banner/banner.component';
import { FooterComponent } from './components/minisite/footer/footer.component';
import { MapComponent } from './components/minisite/map/map.component';
import { SocialMediaComponent } from './components/minisite/social-media/social-media.component';
import { CarouselComponent } from './components/minisite/carousel/carousel.component';

import { DataService } from "./services/data.service";
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { BannerEditComponent } from './components/minisite/banner-edit/banner-edit.component';
import { CarouselEditComponent } from './components/minisite/carousel-edit/carousel-edit.component';
import { FooterEditComponent } from './components/minisite/footer-edit/footer-edit.component';
import { MapEditComponent } from './components/minisite/map-edit/map-edit.component';
import { SocialmediaEditComponent } from './components/minisite/socialmedia-edit/socialmedia-edit.component'


const appRoutes: Routes = [
  { path: 'coupon', component: CouponPageComponent },
  { path: '',      component: AdvertisementPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CouponPageComponent,
    AdvertisementPageComponent,
    DropzoneComponent,
    BannerComponent,
    FooterComponent,
    MapComponent,
    SocialMediaComponent,
    CarouselComponent,
    SafeHtmlPipe,
    BannerEditComponent,
    CarouselEditComponent,
    FooterEditComponent,
    MapEditComponent,
    SocialmediaEditComponent,
    ContenteditableDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: false } // <-- debugging purposes only
   ),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    DndModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    ColorPickerModule,
    MatInputModule,
    MatSliderModule,
    HttpClientModule,
    Ng4FilesModule
  ],
  providers: [DataService,MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
      matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg')); // Or whatever path you placed mdi.svg at
    }
 }

// https://github.com/reppners/ngx-drag-drop
