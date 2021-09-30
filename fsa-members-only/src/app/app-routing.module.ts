import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupPageComponent } from './create-group-page/create-group-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupsListPageComponent } from './groups-list-page/groups-list-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RouteGuard } from './route.guard';

const routes: Routes = [{
	path: '',
	component: GroupsListPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'groups/:id',
	component: GroupPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'sign-in',
	component: SignInPageComponent,
}, {
	path: 'create-group',
	component: CreateGroupPageComponent,
	canActivate: [RouteGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
