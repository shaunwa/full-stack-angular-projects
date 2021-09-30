import { getIngredients, insertIngredient } from '../db';

export const addIngredientRoute = {
	path: '/ingredients',
	method: 'post',
	handler: async (req, res) => {
		const ingredient = req.body;
		await insertIngredient(ingredient);
		const updatedIngredients = await getIngredients();
		res.status(200).json(updatedIngredients);
	}
}