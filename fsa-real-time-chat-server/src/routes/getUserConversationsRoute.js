import { getUserConversations } from '../db';

export const getUserConversationsRoute = {
	method: 'get',
	path: '/api/users/:id/conversations',
	handler: async (req, res) => {
		const { id: userId } = req.params;

		if (req.user.user_id !== userId) {
			return res.sendStatus(403);
		}

		const conversations = await getUserConversations(userId);
		res.status(200).json(conversations);
	}
}