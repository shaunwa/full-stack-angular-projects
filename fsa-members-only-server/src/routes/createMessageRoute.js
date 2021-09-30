import { getGroup, addMessageToGroup, getMessagesForGroup } from '../db';
import * as admin from 'firebase-admin';

export const createMessageRoute = {
	method: 'post',
	path: '/api/groups/:id/messages',
	handler: async (req, res) => {
		const token = req.headers.authtoken;
		const { id } = req.params;
		const { text } = req.body;

		const user = await admin.auth().verifyIdToken(token);
		const group = await getGroup(id);

		if (!user || !group.members.includes(user.user_id)) {
			return res.status(400).json({ message: 'User cannot post to this group'});
		}

		const updatedGroup = await addMessageToGroup(id, user.user_id, text);

		res.status(200).json(updatedGroup);
	}
}