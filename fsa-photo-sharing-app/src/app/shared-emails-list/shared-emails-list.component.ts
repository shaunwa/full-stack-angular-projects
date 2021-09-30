import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-emails-list',
  templateUrl: './shared-emails-list.component.html',
  styleUrls: ['./shared-emails-list.component.css']
})
export class SharedEmailsListComponent implements OnInit {
	inviteEmailValue: string = '';

	@Input() emails: string[] = [];
	@Output() share = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onShare(): void {
	  this.share.emit(this.inviteEmailValue);
	  this.inviteEmailValue = '';
  }

}
