import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversationsService } from '../conversations.service';
import { Socket } from 'socket.io-client';
import { Message } from '../types';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.css']
})
export class ConversationPageComponent implements OnInit, OnDestroy {
  messageInputValue = '';
  messages: Message[] = [];
  socketConnection!: Socket;

  constructor(
	  private route: ActivatedRoute,
	  private conversationsService: ConversationsService,
  ) { }

  ngOnInit(): void {
	  const conversationId = this.route.snapshot.params.conversationId;
	  this.conversationsService.getConversationSocketConnection(conversationId)
	  	.subscribe(socket => {
			  this.socketConnection = socket;

			  this.socketConnection.on('initialMessages', messages => {
				  this.messages = messages;
			  });

			  this.socketConnection.on('updatedMessages', messages => {
				  this.messages = messages;
			  });
		  })
  }

  ngOnDestroy(): void {
	this.socketConnection.disconnect();
  }

  postMessage(): void {
	  const conversationId = this.route.snapshot.params.conversationId;
	  this.socketConnection.emit('postMessage', { text: this.messageInputValue, conversationId })
	  this.messageInputValue = '';
  }

}
