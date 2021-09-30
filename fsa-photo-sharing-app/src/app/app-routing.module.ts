import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from 'src/route.guard';
import { BrowsePhotosPageComponent } from './browse-photos-page/browse-photos-page.component';
import { PhotoDetailPageComponent } from './photo-detail-page/photo-detail-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UploadPhotoPageComponent } from './upload-photo-page/upload-photo-page.component';

const routes: Routes = [{
	path: 'sign-in',
	component: SignInPageComponent,
}, {
	path: '',
	component: BrowsePhotosPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'upload-photo',
	component: UploadPhotoPageComponent,
	canActivate: [RouteGuard],
}, {
	path: 'photos/:id',
	component: PhotoDetailPageComponent,
	canActivate: [RouteGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
