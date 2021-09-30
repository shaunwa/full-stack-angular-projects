import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	constructor(
		public auth: AngularFireAuth,
		private router: Router,
	) { }

	ngOnInit(): void {
	}

	onClickSignOut(): void {
		this.auth.signOut()
			.then(() => this.router.navigateByUrl('/sign-in'));
	}
}
