import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../types';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
	@Input() isLoading: boolean = true;
	@Input() photos: Photo[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}
