import { db } from './db';

export const getIngredients = async () => {
	return await db.getConnection()
		.collection('ingredients')
		.find({})
		.toArray();
}