import { db } from './db';
import { getRequest } from './getRequest';

export const rejectRequest = async (requestId) => {
	const connection = db.getConnection();
	await connection.collection('requests').deleteOne({ id: requestId });
}