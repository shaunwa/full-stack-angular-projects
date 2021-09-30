export interface User {
	fullName: string,
}

export interface Group {
	id: string,
	name: string,
	owner: User,
	members: User[],
	requests: Request[],
	messages: Message[],
}

export interface Message {
	userName: string,
	text: string,
}

export interface Request {
	id: string,
	userName: string,
	name: string,
	owner: User,
}