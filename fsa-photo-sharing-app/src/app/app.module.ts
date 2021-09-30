import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { environment } from '../environments/environment';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { BrowsePhotosPageComponent } from './browse-photos-page/browse-photos-page.component';
import { MyPhotosListComponent } from './my-photos-list/my-photos-list.component';
import { NewPhotoButtonComponent } from './new-photo-button/new-photo-button.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UploadPhotoPageComponent } from './upload-photo-page/upload-photo-page.component';
import { PhotoDetailPageComponent } from './photo-detail-page/photo-detail-page.component';
import { SharedEmailsListComponent } from './shared-emails-list/shared-emails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    NavBarComponent,
    SignInPageComponent,
    BrowsePhotosPageComponent,
    MyPhotosListComponent,
    NewPhotoButtonComponent,
    PhotosListComponent,
    UploadPhotoPageComponent,
    PhotoDetailPageComponent,
    SharedEmailsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule,
	FormsModule,
	HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
