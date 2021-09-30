import { db } from './db';

export const getRequest = async (requestId) => {
	const request = await db.getConnection().collection('requests')
		.findOne({ id: requestId });
	return request;
}