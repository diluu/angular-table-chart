import {Component, Input, OnInit} from '@angular/core';
import {OutputObject} from '../outputobject';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  // This will retrieve the outputObjects from the app component as input
  @Input() outputObjects: OutputObject[];

  // Columns names as available in the OutputObject fields
  displayColumns = ['year', 'age', 'startBalance', 'contributions', 'earnings', 'fees', 'tax', 'withdrawals', 'endBalance'];

  constructor() {
  }

}
