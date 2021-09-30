import * as admin from 'firebase-admin';

export const protectRoute = async (req, res, next) => {
	try {
		const token = req.headers.authtoken;
		const user = await admin.auth().verifyIdToken(token);
		req.user = user;
		next();
	} catch (e) {
		console.log(e);
		res.status(401).json({ message: 'You must be logged in to acces these resources' });
	}
}