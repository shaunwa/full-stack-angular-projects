import { db } from './db';
import { v4 as uuid } from 'uuid';

export const createJoinRequest = async (groupId, userId) => {
	await db.getConnection()
		.collection('requests')
		.insertOne({ id: uuid(), groupId, userId });
}