import {
	getCurrentSharePrice,
	getUserInfo,
	sellStock,
} from '../db';

export const sellStockRoute = {
	method: 'post',
	path: '/api/stocks/sell',
	handler: async (req, res) => {
		const numberOfShares = Number(req.body.numberOfShares);
		const stockHistory = req.app.locals.stockHistory;
		const currentSharePrice = Number(await getCurrentSharePrice(stockHistory));
		const userInfo = await getUserInfo(stockHistory);
		const cashValue = Number(userInfo.cashValue);

		if (numberOfShares > userInfo.numberOfShares) {
			return res.status(400).json({ message: 'User shares are insufficient' });
		}

		await sellStock(numberOfShares, currentSharePrice);
		const updatedUserInfo = await getUserInfo(stockHistory);

		res.status(200).json(updatedUserInfo);
	}
}