import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationPageComponent } from './conversation-page/conversation-page.component';
import { ConversationsListPageComponent } from './conversations-list-page/conversations-list-page.component';
import { NewConversationPageComponent } from './new-conversation-page/new-conversation-page.component';
import { RouteGuard } from './route.guard';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [{
	path: 'sign-in',
	component: SignInPageComponent,
}, {
	path: '',
	component: ConversationsListPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'new-conversation',
	component: NewConversationPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'conversations/:conversationId',
	component: ConversationPageComponent,
	canActivate: [RouteGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
