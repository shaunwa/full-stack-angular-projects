import { ObjectId } from 'mongodb';
import { db } from './db';

export const getPhoto = async (photoId) => {
	return await db.getConnection()
		.collection('photos')
		.findOne({ _id: ObjectId(photoId) });
}