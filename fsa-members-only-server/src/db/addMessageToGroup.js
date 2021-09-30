import { db } from './db';
import { getGroup } from './getGroup';
import { getOwnerPopulatedGroup } from './getOwnerPopulatedGroup';
import { getMemberPopulatedGroup } from './getMemberPopulatedGroup';

export const addMessageToGroup = async (groupId, userId, text) => {
	await db.getConnection()
		.collection('messages')
		.insertOne({ groupId, userId, text });
	
	const group = await getGroup(groupId);

	if (group.ownerId === userId) {
		return await getOwnerPopulatedGroup(groupId);
	}

	return await getMemberPopulatedGroup(groupId);
}