import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-upload-photo-page',
  templateUrl: './upload-photo-page.component.html',
  styleUrls: ['./upload-photo-page.component.css']
})
export class UploadPhotoPageComponent implements OnInit {
  titleValue: string = '';
  selectedFile: File | null = null;

  constructor(
	  private photosService: PhotosService,
	  private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onFileSelect(event: any): void {
	this.selectedFile = event.target.files[0];
  }

  onClickUpload(): void {
	  if (this.selectedFile) {
		  const formData = new FormData();

		  formData.append('title', this.titleValue);
		  formData.append('file', this.selectedFile);

		  this.photosService.uploadPhoto(formData)
		  	.subscribe(() => this.router.navigateByUrl('/'));
	  }
  }

}
