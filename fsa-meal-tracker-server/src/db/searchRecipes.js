import { db } from './db';

export const searchRecipes = async (searchString) => {
	const meals = db.getConnection()
		.collection('recipes')
		.find({ $text: { $search: searchString } })
		.toArray();
	return meals;
}