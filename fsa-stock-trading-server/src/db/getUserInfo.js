import { getCurrentSharePrice } from "./getCurrentSharePrice";
import { getUser } from "./getUser";

export const getUserInfo = async (stockHistory) => {
	const currentSharePrice = await getCurrentSharePrice(stockHistory);
	const { cashValue, numberOfShares } = await getUser();
	const sharesValue = currentSharePrice * numberOfShares;

	return {
		cashValue,
		numberOfShares,
		sharesValue,
	};
}