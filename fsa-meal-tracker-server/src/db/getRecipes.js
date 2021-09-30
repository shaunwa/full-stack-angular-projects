import { db } from './db';

export const getRecipes = async () => {
	return await db.getConnection()
		.collection('recipes')
		.find({})
		.toArray();
}