import { db } from './db';

export const getMeals = async () => {
	return await db.getConnection()
		.collection('meals')
		.find({})
		.toArray();
}