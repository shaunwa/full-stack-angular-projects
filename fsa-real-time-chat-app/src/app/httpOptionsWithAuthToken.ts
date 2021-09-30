import { HttpHeaders } from '@angular/common/http';

export const httpOptionsWithAuthToken = (token: string) => ({
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		'AuthToken': token,
	}),
}); 