import {Injectable} from '@angular/core';
import {OutputObject} from './outputobject';
import {InputObject} from './inputobject';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {
  }

  /**
   *
   * Method to calculate the values for the first year
   * @param inputObject
   */
  calculateFirstYear(inputObject: InputObject): OutputObject {
    const firstObj = new OutputObject();
    firstObj.year = new Date().getFullYear();
    firstObj.age = inputObject.age;
    let balance = inputObject.startBalance;
    firstObj.startBalance = balance;
    const contributions = inputObject.salary * inputObject.contributionRate / 100;
    firstObj.contributions = contributions;
    firstObj.earnings = Math.round((balance + contributions) * inputObject.earnings / 100);
    firstObj.fees = Math.round((balance + contributions + firstObj.earnings) * inputObject.fees / 100);
    firstObj.tax = Math.round((contributions + firstObj.earnings) * inputObject.tax / 100);
    balance = balance + contributions + firstObj.earnings - firstObj.fees - firstObj.tax;
    firstObj.withdrawals = 0;
    firstObj.endBalance = balance;
    return firstObj;
  }

  /**
   *
   * Method to calculate values for each upcoming year
   * @param inputObject User Input
   * @param prevOutObject Values caluclulated for the previous year
   */
  calculateNextYear(inputObject: InputObject, prevOutObject: OutputObject): OutputObject {
    const outObj = new OutputObject();
    outObj.year = prevOutObject.year + 1;
    outObj.age = prevOutObject.age + 1;
    let balance = prevOutObject.endBalance;
    outObj.startBalance = balance;
    let contributions = 0;
    if (outObj.age < inputObject.withdrawalAge) {
      contributions = Math.round(prevOutObject.contributions + (prevOutObject.contributions * inputObject.inflationRate / 100));
      outObj.withdrawals = 0;
    } else {
      outObj.withdrawals = Math.round(balance * inputObject.withdrawalRate / 100);
    }
    outObj.contributions = contributions;
    outObj.earnings = Math.round((balance + contributions) * inputObject.earnings / 100);
    outObj.fees = Math.round((balance + contributions + outObj.earnings) * inputObject.fees / 100);
    outObj.tax = Math.round((contributions + outObj.earnings) * inputObject.tax / 100);
    balance = balance + contributions + outObj.earnings - outObj.fees - outObj.tax - outObj.withdrawals;
    outObj.endBalance = balance;
    return outObj;
  }

  /**
   *
   * This is the main service method and it will use the other helper method in this class
   * @param inputObject User input
   * @Return Returns the output for 50 years
   */
  calculateBalanceProjection(inputObject: InputObject): OutputObject[] {
    const outputObjects = [];
    let outObj  = this.calculateFirstYear(inputObject);
    outputObjects.push(outObj);
    for (let i = 0; i < 50; i++) {
      outObj = this.calculateNextYear(inputObject, outObj);
      outputObjects.push(outObj);
    }
    return outputObjects;
  }
}
