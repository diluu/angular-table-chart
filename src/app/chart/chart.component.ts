import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // This will retrieve the lineChartData and lineChartLabels from the app component as input
  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];

  lineChartType = 'line';
  lineChartColors: Color[] = [
    {
      borderColor: '#00AEFF'
    },
  ];

  // Chart options
  lineChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true,
        ticks: {
          min: 0,
          callback: (value, index, values) => '$' + value
        }
      }],
    },
    elements: {
      line: {
        fill: false
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
