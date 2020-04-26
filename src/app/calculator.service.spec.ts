import {TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';
import {InputObject} from './inputobject';
import {OutputObject} from './outputobject';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let inputObject: InputObject;
  let outObject1: OutputObject;
  let outObject2: OutputObject;

  /**
   *
   * Create Objects used in service test cases
   */
  beforeAll(() => {
      inputObject = new InputObject();
      inputObject.age = 45;
      inputObject.startBalance = 300000;
      inputObject.salary = 100000;
      inputObject.contributionRate = 9.5;
      inputObject.inflationRate = 3;
      inputObject.earnings = 7.5;
      inputObject.fees = 1.5;
      inputObject.tax = 15;
      inputObject.withdrawalRate = 5;
      inputObject.withdrawalAge = 66;

      outObject1 = new OutputObject();
      outObject1.year = 2020;
      outObject1.age = 45;
      outObject1.startBalance = 300000;
      outObject1.contributions = 9500;
      outObject1.earnings = 23213;
      outObject1.fees = 4991;
      outObject1.tax = 4907;
      outObject1.withdrawals = 0;
      outObject1.endBalance = 322815;

      outObject2 = new OutputObject();
      outObject2.year = 2021;
      outObject2.age = 46;
      outObject2.startBalance = 322815;
      outObject2.contributions = 9785;
      outObject2.earnings = 24945;
      outObject2.fees = 5363;
      outObject2.tax = 5210;
      outObject2.withdrawals = 0;
      outObject2.endBalance = 346972;


    }
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   *
   * Test calculateFirstYear()
   */
  it('Values for the first year should be calculated', () => {
    expect(service.calculateFirstYear(inputObject)).toEqual(outObject1);
  });

  /**
   *
   * Test calculateNextYear()
   */
  it('Values for the second year should be calculated', () => {
    expect(service.calculateNextYear(inputObject, outObject1)).toEqual(outObject2);
  });


});
