import { db } from './db';

export const getSharedPhotosForUser = async (userId) => {
	return await db.getConnection().collection('photos')
		.find({ sharedWith: userId })
		.toArray();
}