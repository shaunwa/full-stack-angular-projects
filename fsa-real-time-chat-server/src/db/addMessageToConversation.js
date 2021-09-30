import { ObjectId } from 'mongodb';
import { db } from './db';

export const addMessageToConversation = async (messageText, userId, conversationId) => {
	const newId = new ObjectId();

	const newMessage = {
		_id: newId,
		text: messageText,
		postedById: userId,
	};

	await db.getConnection().collection('conversations')
		.updateOne({ _id: ObjectId( conversationId )}, {
			$push: { messages: newMessage },
		});
}