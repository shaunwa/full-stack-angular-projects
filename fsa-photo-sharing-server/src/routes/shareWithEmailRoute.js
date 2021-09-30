import {
	getUserOwnsPhoto,
	sharePhotoWithUserByEmail,
	getPopulatedPhoto,
} from '../db';

export const shareWithEmailRoute = {
	method: 'post',
	path: '/api/photos/:id/shared-with',
	handler: async (req, res) => {
		const { id: photoId } = req.params;
		const userId = req.user.user_id;

		const { email } = req.body;
		const userOwnsGroup = await getUserOwnsPhoto(userId, photoId);

		if (userOwnsGroup) {
			await sharePhotoWithUserByEmail(photoId, email);
			const updatedPhoto = await getPopulatedPhoto(photoId);
			res.status(200).json(updatedPhoto);
		} else {
			res.status(401).json({ message: 'Only the photo owner can share a photo' });
		}
	}
}