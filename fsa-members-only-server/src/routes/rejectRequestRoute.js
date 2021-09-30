import { rejectRequest, getRequest, getRequestsForGroup, getGroup } from '../db';
import * as admin from 'firebase-admin';

export const rejectRequestRoute = {
	method: 'post',
	path: '/api/requests/:requestId/reject',
	handler: async (req, res) => {
		const token = req.headers.authtoken;
		const user = await admin.auth().verifyIdToken(token);

		const { requestId } = req.params;
		const { groupId } = await getRequest(requestId);
		const group = await getGroup(groupId);

		if (!user || group.ownerId !== user.user_id) {
			return res.status(400).json({ message: 'User is not group owner' });
		}

		await rejectRequest(requestId);
		const updatedRequests = await getRequestsForGroup(groupId);

		res.status(200).json(updatedRequests);
	}
}