import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
	@Input() 
	set xValues(values: string[]) {
		this.graph.data[0].x = values;
	};
	@Input()
	set yValues(values: string[]) {
		this.graph.data[0].y = values;
	};

	graph = {
		data: [
			{
				x: this.xValues,
				y: this.yValues,
				type: 'scatter',
				mode: 'lines',
				marker: { color: 'green' },
			}
		],
		layout: {
			width: 900,
			height: 400,
			title: 'TSLA Stock History',
		}
	}

  constructor() { }

  ngOnInit(): void {
  }

}
