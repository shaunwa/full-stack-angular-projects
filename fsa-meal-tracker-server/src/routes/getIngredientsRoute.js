import { getIngredients } from '../db';

export const getIngredientsRoute = {
	path: '/ingredients',
	method: 'get',
	handler: async (req, res) => {
		const ingredients = await getIngredients();
		res.status(200).json(ingredients);
	}
}