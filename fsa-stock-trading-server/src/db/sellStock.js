import { db } from './db';

export const sellStock = async (numberOfSharesToSell, currentSharePrice) => {
	const cost = numberOfSharesToSell * currentSharePrice;
	await db.getConnection().collection('users')
		.updateOne({}, {
			$inc: {
				numberOfShares: -numberOfSharesToSell,
				cashValue: cost, 
			}
		});
}