import { getSharedPhotosForUser } from '../db';

export const getSharedWithMePhotosRoute = {
	method: 'get',
	path: '/api/shared',
	handler: async (req, res) => {
		const photos = await getSharedPhotosForUser(req.user.user_id);
		res.status(200).json(photos);
	}
}