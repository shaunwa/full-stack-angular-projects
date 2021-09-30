import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../types';

@Component({
  selector: 'app-browse-photos-page',
  templateUrl: './browse-photos-page.component.html',
  styleUrls: ['./browse-photos-page.component.css']
})
export class BrowsePhotosPageComponent implements OnInit {
	isLoadingMyPhotos = true;
	myPhotos: Photo[] = [];

	isLoadingSharedPhotos = true;
	sharedPhotos: Photo[] = [];

	constructor(
		private photosService: PhotosService,
	) { }

	ngOnInit(): void {
		this.photosService.loadMyPhotos()
			.subscribe(photos => {
				this.myPhotos = photos;
				this.isLoadingMyPhotos = false;
			});

		this.photosService.loadSharedPhotos()
			.subscribe(photos => {
				this.sharedPhotos = photos;
				this.isLoadingSharedPhotos = false;
			});
	}

}
