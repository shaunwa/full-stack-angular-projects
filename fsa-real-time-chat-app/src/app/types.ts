export interface Conversation {
	_id: string,
	name: string,
	memberIds: string[],
}

export interface User {
	id: string,
	name: string,
}

export interface Message {
	postedBy: User,
	text: string,
}