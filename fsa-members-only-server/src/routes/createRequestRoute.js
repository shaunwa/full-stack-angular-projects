import * as admin from 'firebase-admin';
import { createJoinRequest } from '../db';

export const createRequestRoute = {
	method: 'post',
	path: '/api/groups/:id/request',
	handler: async (req, res) => {
		const token = req.headers.authtoken;
		const groupId = req.params.id;

		const user = await admin.auth().verifyIdToken(token);

		if (!token || !user) {
			return res.status(400).json({ message: "Must be logged in" });
		}

		await createJoinRequest(groupId, user.user_id);

		res.status(200).json({ message: 'Success!' });
	}
}