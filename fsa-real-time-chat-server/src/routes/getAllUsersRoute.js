import { getAllUsers } from '../db';

export const getAllUsersRoute = {
	method: 'get',
	path: '/api/users',
	handler: async (req, res) => {
		const users = await getAllUsers();
		res.status(200).json(users);
	}
}