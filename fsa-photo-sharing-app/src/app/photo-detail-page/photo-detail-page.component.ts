import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from '../types';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.css']
})
export class PhotoDetailPageComponent implements OnInit {
	isLoading = true;
	photo: Photo | null = null;

	constructor(
		private photosService: PhotosService,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		const photoId = this.route.snapshot.params.id;

		this.photosService.loadPhoto(photoId)
			.subscribe(photo => {
				this.photo = photo;
				this.isLoading = false;
			})
	}

	shareWithEmail(email: string): void {
		const photoId = this.route.snapshot.params.id;

		this.photosService.sharePhotoWithEmail(photoId, email)
			.subscribe(updatedPhoto => {
				this.photo = updatedPhoto;
			});
	}

}
