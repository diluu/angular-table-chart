import {Component} from '@angular/core';
import {InputObject} from './inputobject';
import {OutputObject} from './outputobject';
import {CalculatorService} from './calculator.service';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Capital Balance Projection';

  // Input and output objects
  public inputObject: InputObject = new InputObject();
  public outputObjects: OutputObject[] = [];

  // Variables to keep chart data (year and start balance)
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  constructor(private calculatorService: CalculatorService) {
  }

  /**
   *
   * This method calls to the CalculatorService with InputObject to calculate the balance
   * Result is pass to the chart
   */
  getBalanceProjection() {
    this.outputObjects = this.calculatorService.calculateBalanceProjection(this.inputObject);
    this.lineChartData = [{data: this.outputObjects.map(o => o.startBalance)}]; // Y axis values
    this.lineChartLabels = this.outputObjects.map(o => o.year).map(String); // X axis values
  }
}
