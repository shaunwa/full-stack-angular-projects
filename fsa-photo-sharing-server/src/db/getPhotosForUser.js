import { db } from './db';

export const getPhotosForUser = async (userId) => {
	return await db.getConnection().collection('photos')
		.find({ ownerId: userId })
		.toArray();
}