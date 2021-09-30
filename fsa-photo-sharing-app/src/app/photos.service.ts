import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { httpOptionsWithAuthToken } from './httpOptionsWithAuthToken';
import { Photo } from './types';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
	  private auth: AngularFireAuth,
	  private http: HttpClient,
  ) { }

  loadMyPhotos(): Observable<Photo[]> {
	return new Observable<Photo[]>(observer => {
		this.auth.user.subscribe(user => {
			user?.getIdToken().then(token => {
				if (token) {
					this.http.get<Photo[]>('/api/my-photos', httpOptionsWithAuthToken(token))
						.subscribe(photos => observer.next(photos));
				}
			});
		})
	})
  }

  loadSharedPhotos(): Observable<Photo[]> {
	return new Observable<Photo[]>(observer => {
		this.auth.user.subscribe(user => {
			user?.getIdToken().then(token => {
				if (token) {
					this.http.get<Photo[]>('/api/shared', httpOptionsWithAuthToken(token))
						.subscribe(photos => observer.next(photos));
				}
			});
		})
	})
  }

  uploadPhoto(formData: FormData): Observable<void> {
	return new Observable<void>(observer => {
		this.auth.user.subscribe(user => {
			user?.getIdToken().then(token => {
				if (token) {
					this.http.post<void>('/api/upload', formData, httpOptionsWithAuthToken(token, true))
						.subscribe(() => observer.next());
				}
			});
		})
	})
  }

  loadPhoto(photoId: string): Observable<Photo> {
	return new Observable<Photo>(observer => {
		this.auth.user.subscribe(user => {
			user?.getIdToken().then(token => {
				if (token) {
					this.http.get<Photo>(`/api/photos/${photoId}`, httpOptionsWithAuthToken(token))
						.subscribe(photo => observer.next(photo));
				}
			});
		})
	})
  }

  sharePhotoWithEmail(photoId: string, email: string): Observable<Photo> {
	return new Observable<Photo>(observer => {
		this.auth.user.subscribe(user => {
			user?.getIdToken().then(token => {
				if (token) {
					this.http.post<Photo>(`/api/photos/${photoId}/shared-with`, { email }, httpOptionsWithAuthToken(token))
						.subscribe(photo => observer.next(photo));
				}
			});
		})
	}) 
  }
}
