import { Component, OnInit } from '@angular/core';
import { PortfolioData } from 'src/types';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  isLoading = true;
  portfolioData: PortfolioData | null = null;
  numberOfSharesValue: number = 0;

  times: string[] = [];
  prices: string[] = [];
  currentPrice: string = '';

  constructor(
	  private stocksService: StocksService,
  ) { }

  ngOnInit(): void {
	  this.stocksService.loadUserPortfolio()
	  	.subscribe(data => {
			  this.portfolioData = data;
			  this.isLoading = false;
		  });

	this.stocksService.loadStockHistory()
		  .subscribe(data => {
			  this.times = Object.keys(data);
			  this.prices = Object.values(data).map(obj => obj['4. close']);
			  this.currentPrice = this.prices[this.prices.length - 1];
		  })
  }

  buyShares(): void {
	this.stocksService.buyStock(this.numberOfSharesValue)
		.subscribe(updatedData => {
			this.portfolioData = updatedData;
			this.numberOfSharesValue = 0;
		});
  }

  sellShares(): void {
	this.stocksService.sellStock(this.numberOfSharesValue)
		.subscribe(updatedData => {
			this.portfolioData = updatedData;
			this.numberOfSharesValue = 0;
		});
  }

}
