import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';

import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ConversationsListPageComponent } from './conversations-list-page/conversations-list-page.component';
import { NewConversationPageComponent } from './new-conversation-page/new-conversation-page.component';
import { ConversationPageComponent } from './conversation-page/conversation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    NavBarComponent,
    SignInPageComponent,
    ConversationsListPageComponent,
    NewConversationPageComponent,
    ConversationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
