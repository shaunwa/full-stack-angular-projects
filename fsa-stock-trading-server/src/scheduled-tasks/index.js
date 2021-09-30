import { createRefreshStockPricesTask } from './createRefreshStockPricesTask';

export { scheduleTask } from './scheduleTask';

export const tasks = [
	createRefreshStockPricesTask('TSLA'),
];