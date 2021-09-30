import { db } from './db';
import { getRequest } from './getRequest';

export const acceptRequest = async (requestId) => {
	const request = await getRequest(requestId);
	const connection = db.getConnection();
	await connection.collection('requests').deleteOne({ id: requestId });
	await connection.collection('groups').updateOne({ id: request.groupId }, {
		$push: { members: request.userId },
	});
}