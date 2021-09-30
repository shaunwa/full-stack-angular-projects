import { ObjectId } from 'mongodb';
import { db } from './db';

export const deleteMeal = async (mealId) => {
	await db.getConnection()
		.collection('meals')
		.deleteOne({ _id: ObjectId(mealId) });
}