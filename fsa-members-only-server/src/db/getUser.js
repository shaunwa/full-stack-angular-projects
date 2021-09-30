import { db } from './db';

export const getUser = async (id) => {
	const user = db.getConnection()
		.collection('users')
		.findOne({ id });
	return user;
}