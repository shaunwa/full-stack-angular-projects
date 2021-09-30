import { db } from './db';
import { getUser } from './getUser';

export const getGroup = async (groupId) => {
	const group = await db.getConnection()
		.collection('groups')
		.findOne({ id: groupId });
	const owner = await getUser(group.ownerId);
	const populatedGroup = {
		...group,
		owner,
	};

	return populatedGroup;
}