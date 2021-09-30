import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../types';

@Component({
  selector: 'app-my-photos-list',
  templateUrl: './my-photos-list.component.html',
  styleUrls: ['./my-photos-list.component.css']
})
export class MyPhotosListComponent implements OnInit {
	@Input() isLoading: boolean = true;
	@Input() photos: Photo[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}
