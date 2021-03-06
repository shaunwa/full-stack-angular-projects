import { db }from './db';

export const buyStock = async (numberOfSharesToPurchase, currentSharePrice) => {
	const cost = numberOfSharesToPurchase * currentSharePrice;
	await db.getConnection().collection('users')
		.updateOne({}, {
			$inc: {
				numberOfShares: numberOfSharesToPurchase,
				cashValue: -cost, 
			}
		});
}